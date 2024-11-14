document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.sequence-image');
    let currentIndex = 0;

    // Set initial state
    images.forEach((img, index) => {
        img.style.opacity = index === 0 ? '1' : '0';
    });

    function cycleImages() {
        // Hide current image
        images[currentIndex].style.opacity = '0';
        
        // Move to next image
        currentIndex = (currentIndex + 1) % images.length;
        
        // Show next image
        images[currentIndex].style.opacity = '1';
        
        console.log('Cycling to image:', currentIndex); // Debug log
    }

    // Start the cycle
    setInterval(cycleImages, 1000);
});
