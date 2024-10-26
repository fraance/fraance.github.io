document.addEventListener('DOMContentLoaded', function() {
    const rotatingText = document.querySelector('.rotating-text');
    let titles = Array.from(rotatingText.getElementsByClassName('title'));
    const visibleTitles = 5; // Total number of visible titles (2 above, 1 current, 2 below)
    
    // Set initial positions and styles
    function initializeTitles() {
        titles.forEach((title, index) => {
            title.style.position = 'absolute';
            title.style.width = '100%';
            title.style.transition = 'all 0.5s ease-in-out';
            updateTitlePosition(index);
        });
    }

    // Update position and opacity of each title
    function updateTitlePosition(index) {
        const title = titles[index];
        
        // Calculate vertical position (middle title at index 0)
        const yPos = index * 60 - 60; // Spacing between titles, offset to center
        
        // Calculate opacity based on distance from center
        const opacity = Math.max(0, 1 - Math.abs(index - 1) * 0.4);
        
        title.style.transform = `translateY(${yPos}px)`;
        title.style.opacity = opacity;
        
        // Make titles visible if they're within 2 positions of the current title
        title.style.visibility = Math.abs(index - 1) <= 3 ? 'visible' : 'hidden';
    }

    // Rotate titles by moving last to first
    function rotateTitles() {
        // Move last title to the beginning
        const lastTitle = titles[titles.length - 1];
        rotatingText.insertBefore(lastTitle, rotatingText.firstChild);
        
        // Update titles array
        titles = Array.from(rotatingText.getElementsByClassName('title'));
        
        // Update positions
        titles.forEach((_, index) => updateTitlePosition(index));
    }

    // Initialize and start rotation
    initializeTitles();
    setInterval(rotateTitles, 1000); 
});
