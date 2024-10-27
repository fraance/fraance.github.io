document.addEventListener('DOMContentLoaded', function () {

    function initializeTitles() {
        titles.forEach((title, index) => {
            title.style.position = 'absolute';
            title.style.width = '100%';
            title.style.transition = 'all 0.5s ease-in-out';
            title.style.transform = `translateY(${(index - mid) * spacing}px)`;
            title.style.opacity = Math.max(0, 1 - Math.abs(index - mid) * 0.3);
        });
    }
    function updateTitlePosition(titles, index) {
        const title = titles[index];
        title.style.transform = `translateY(${(index - mid) * spacing}px)`;
        title.style.opacity = Math.max(0, 1 - Math.abs(index - mid) * 0.3);
        title.style.visibility = Math.abs(index - mid) <= 4 ? 'visible' : 'hidden';
    }

    // Rotate titles by moving last to first
    function rotateTitles() {
        const lastTitle = rotatingText.getElementsByClassName('title')[titles.length - 1];
        rotatingText.insertBefore(lastTitle, rotatingText.firstChild);
        titles = Array.from(rotatingText.getElementsByClassName('title'));
        titles.forEach((_, index) => updateTitlePosition(titles, index));
    }

    const rotatingText = document.querySelector('.rotating-text');
    let titles = Array.from(rotatingText.getElementsByClassName('title'));
    const spacing = 50;
    let mid = titles.length / 2;
    initializeTitles();
    setInterval(rotateTitles, 1000);
});
