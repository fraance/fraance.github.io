document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.sequence-image');
    let currentIndex = 0;

    function cycleImages() {
        // Hide current image
        images[currentIndex].style.opacity = '0';
        
        // Move to next image
        currentIndex = (currentIndex + 1) % images.length;
        
        // Show next image
        images[currentIndex].style.opacity = '1';
    }

    // Start the cycle
    setInterval(cycleImages, 2000); // Change image every 2 seconds
});
