$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
     
   
     $( ".card" ).hover(
     function() {
       $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
     }, function() {
       $(this).removeClass('shadow-lg');
     }
   );
     
   // document ready  
   });

document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.title');
  let currentIndex = 0;
  const totalTitles = titles.length;

  function updateTitleStates() {
    titles.forEach((title, index) => {
      // Remove all states
      title.classList.remove('entering', 'active', 'exiting');
      
      // Calculate relative position
      let relativePos = index - currentIndex;
      if (relativePos < 0) relativePos += totalTitles;
      
      // Apply states
      if (relativePos === 0) {
        title.classList.add('active');
      } else if (relativePos === 1) {
        title.classList.add('entering');
      } else {
        title.classList.add('exiting');
      }
    });
  }

  function rotateTitles() {
    currentIndex = (currentIndex + 1) % totalTitles;
    updateTitleStates();
  }

  // Initialize first title
  updateTitleStates();
  
  // Start rotation with 3-second pause
  setInterval(rotateTitles, 3000);
});
