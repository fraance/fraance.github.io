"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Fullscreen animated shader background using three.js.
 * Matches the prototype's noise-based gradient.
 */
export default function BackgroundCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const startTimeRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const uniforms = {
            u_time: { value: 0 },
            u_mouse: { value: new THREE.Vector2(0, 0) },
            u_resolution: {
                value: new THREE.Vector2(window.innerWidth, window.innerHeight),
            },
        } satisfies Record<string, THREE.IUniform>;

        const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

        // Ported from homepage.html prototype
        const fragmentShader = `
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_resolution;

      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m; m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = vUv;
        vec2 warpUv = uv;
        warpUv += snoise(uv * 3.0 + u_time * 0.1) * 0.03; // Slower animation

        vec3 color1 = vec3(1.0, 0.3, 0.1);  // Red/Orange
        vec3 color2 = vec3(0.5, 0.8, 1.0);  // Light Blue/Cyan
        vec3 color3 = vec3(0.1, 0.7, 0.6);  // Greenish/Teal

        vec3 finalColor = mix(color1, color2, smoothstep(-1.0, 1.0, snoise(warpUv * 1.5 + u_time * 0.05)));
        finalColor = mix(finalColor, color3, smoothstep(-1.0, 1.0, snoise(warpUv * 2.0 - u_time * 0.07)));

        float grain = (snoise(uv * 1000.0) * 2.0 - 1.0) * 0.05;
        finalColor += grain;
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader,
            fragmentShader,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const setSize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            renderer.setSize(w, h, false);
            (uniforms.u_resolution.value as THREE.Vector2).set(w, h);
        };

        const onPointerMove = (e: PointerEvent) => {
            (uniforms.u_mouse.value as THREE.Vector2).set(e.clientX, e.clientY);
        };

        const animate = (time: number) => {
            if (!startTimeRef.current) startTimeRef.current = time;
            const t = (time - startTimeRef.current) / 1000; // seconds
            uniforms.u_time.value = t;
            renderer.render(scene, camera);
            rafRef.current = requestAnimationFrame(animate);
        };

        setSize();
        window.addEventListener("resize", setSize);
        window.addEventListener("pointermove", onPointerMove);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", setSize);
            window.removeEventListener("pointermove", onPointerMove);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            className="fixed inset-0 -z-10 h-screen w-screen"
        />
    );
}
