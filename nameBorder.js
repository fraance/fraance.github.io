document.addEventListener('DOMContentLoaded', function() {
  const name = document.getElementById('name');
  const nameBorder = name.querySelector('.name-border path');

  function distortPath(path, amount) {
    return path.replace(/(-?\d+\.?\d*)/g, (match) => {
      return parseFloat(match) + (Math.random() - 0.5) * amount;
    });
  }

  const originalPath = nameBorder.getAttribute('d');
  const distortedPath = distortPath(originalPath, 2);
  nameBorder.setAttribute('d', distortedPath);

  name.addEventListener('mousemove', function(e) {
    const rect = name.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const angleX = (x - centerX) / centerX;
    const angleY = (y - centerY) / centerY;

    nameBorder.style.transform = `translate(-50%, -50%) scale(1) perspective(100px) rotateY(${angleX * 5}deg) rotateX(${-angleY * 5}deg)`;
  });

  name.addEventListener('mouseleave', function() {
    nameBorder.style.transform = 'translate(-50%, -50%) scale(0) perspective(100px) rotateY(0deg) rotateX(0deg)';
  });
});
