import * as THREE from 'three';

// --- MOUSE TRACKING SETUP ---
const mouse = new THREE.Vector2(0, 0); // Stores raw mouse position
const targetMouse = new THREE.Vector2(0, 0); // Stores smoothed mouse position
let isHovering = false;

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.getElementById('sphere-canvas'),
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Uniforms that will be passed to the shader
const uniforms = {
    u_time: { value: 0.0 },
    u_mouse: { value: new THREE.Vector2(0, 0) }, // Pass smoothed mouse coords
    u_mouse_intensity: { value: 0.0 }, // Pass interaction intensity
    u_color_a: { value: new THREE.Color('#001a33') }, // Dark blue
    u_color_b: { value: new THREE.Color('#00aaff') }  // Bright cyan/green
};

// Create the sphere
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.ShaderMaterial({
    vertexShader: `
        varying vec3 v_Normal;
        varying vec3 v_Position;

        void main() {
            v_Normal = normal;
            v_Position = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float u_time;
        uniform vec2 u_mouse; // New uniform for mouse position
        uniform float u_mouse_intensity; // New uniform for interaction intensity
        uniform vec3 u_color_a;
        uniform vec3 u_color_b;

        varying vec3 v_Normal;
        varying vec3 v_Position;

        // Classic Perlin 3D Noise (snoise function remains the same)
        // Courtesy of Stefan Gustavson (https://github.com/stegu/webgl-noise)
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        float snoise(vec3 v) {
            const vec2 C = vec2(1.0/6.0, 1.0/3.0);
            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i  = floor(v + dot(v, C.yyy));
            vec3 x0 = v - i + dot(i, C.xxx);
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min(g.xyz, l.zxy);
            vec3 i2 = max(g.xyz, l.zxy);
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;
            i = mod289(i);
            vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            float n_ = 0.142857142857;
            vec3  ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_);
            vec4 x = x_ * ns.x + ns.yyyy;
            vec4 y = y_ * ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4(x.xy, y.xy);
            vec4 b1 = vec4(x.zw, y.zw);
            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        // Fractal Brownian Motion
        float fbm(vec3 p) {
            float value = 0.0;
            float amplitude = 0.5;
            for (int i = 0; i < 6; i++) {
                value += amplitude * snoise(p);
                p *= 2.0;
                amplitude *= 0.5;
            }
            return value;
        }

        void main() {
            // Use the vertex normal as the basis for the noise texture
            vec3 noisy_pos = v_Normal * 2.0;

            // --- MOUSE INTERACTION ---
            // Distort the position used for noise lookup based on mouse coordinates.
            // The distortion is scaled by the mouse_intensity uniform.
            noisy_pos.xy += u_mouse * u_mouse_intensity * 0.3;

            // Evolve the texture over time
            noisy_pos.z += u_time * 0.1;
            noisy_pos.x += u_time * 0.05;

            // Calculate fractal noise
            float noise = fbm(noisy_pos);

            // Add a second layer of noise for more detail
            float detail_noise = fbm(noisy_pos * 3.0 + 10.0);
            noise += detail_noise * 0.25;

            // Rim lighting effect based on the angle to the camera
            vec3 view_dir = normalize(cameraPosition - v_Position);
            float rim = 1.0 - dot(view_dir, v_Normal);
            rim = smoothstep(0.0, 1.0, rim);

            // Control the initial reveal animation
            float reveal_factor = smoothstep(0.0, 0.7, u_time);
            rim = pow(rim, 3.0) * reveal_factor;

            // Mix colors based on noise
            vec3 color = mix(u_color_a, u_color_b, noise);

            // Add rim light to the color
            color += vec3(rim * 0.7);

            gl_FragColor = vec4(color, 1.0);
        }
    `,
    uniforms: uniforms,
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 2.5;

// --- EVENT LISTENERS ---
function onMouseMove(event) {
    isHovering = true;
    // Convert mouse position to normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function onMouseLeave() {
    isHovering = false;
}

window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('mouseleave', onMouseLeave, false);

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);


// Animation loop
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);

    // --- SMOOTHING LOGIC ---
    // If mouse is not hovering, smoothly move mouse position back to center (0,0)
    if (!isHovering) {
        mouse.lerp(new THREE.Vector2(0, 0), 0.05);
    }

    // Smoothly interpolate the target mouse position towards the actual mouse position
    // This creates a nice, gentle trailing effect.
    targetMouse.lerp(mouse, 0.08);

    // Smoothly interpolate the mouse intensity
    const targetIntensity = isHovering ? 1.0 : 0.0;
    uniforms.u_mouse_intensity.value += (targetIntensity - uniforms.u_mouse_intensity.value) * 0.1;

    // Update uniforms
    uniforms.u_time.value = clock.getElapsedTime();
    uniforms.u_mouse.value.copy(targetMouse);


    renderer.render(scene, camera);
}

animate();
