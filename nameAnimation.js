class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 2;
    this.baseX = x;
    this.baseY = y;
    this.density = (Math.random() * 30) + 1;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse) {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

class NameAnimation {
  constructor() {
    this.canvas = document.getElementById('nameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.nameElement = document.getElementById('name');
    this.particles = [];
    this.mouse = {
      x: null,
      y: null,
      radius: 100
    };

    this.init();
  }

  init() {
    this.resizeCanvas();
    this.createParticles();
    this.animate();
    this.addEventListeners();
  }

  resizeCanvas() {
    this.canvas.width = this.nameElement.offsetWidth;
    this.canvas.height = this.nameElement.offsetHeight;
  }

  createParticles() {
    const nameRect = this.nameElement.getBoundingClientRect();
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = nameRect.width;
    tempCanvas.height = nameRect.height;
    tempCtx.font = getComputedStyle(this.nameElement).font;
    tempCtx.fillStyle = getComputedStyle(this.nameElement).color;
    tempCtx.fillText(this.nameElement.textContent, 0, nameRect.height * 0.8);

    const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
    const data = imageData.data;

    for (let y = 0; y < tempCanvas.height; y += 3) {
      for (let x = 0; x < tempCanvas.width; x += 3) {
        const index = (y * tempCanvas.width + x) * 4;
        const alpha = data[index + 3];
        if (alpha > 0) {
          const color = `rgb(${data[index]}, ${data[index + 1]}, ${data[index + 2]})`;
          this.particles.push(new Particle(x, y, color));
        }
      }
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let particle of this.particles) {
      particle.draw(this.ctx);
      particle.update(this.mouse);
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  addEventListeners() {
    window.addEventListener('resize', () => this.resizeCanvas());
    this.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x - this.canvas.offsetLeft;
      this.mouse.y = e.y - this.canvas.offsetTop;
    });
    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.x = undefined;
      this.mouse.y = undefined;
    });
  }
}

window.addEventListener('load', () => new NameAnimation());
