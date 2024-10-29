$(document).ready(function () {
  $(".card").hover(
    function () {
      $(this).addClass('shadow-lg').css('cursor', 'pointer');
    }, function () {
      $(this).removeClass('shadow-lg');
    }
  );

  function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0.45 * window.innerHeight) {
      document.documentElement.style.setProperty('--bg-color', 'white');
      document.documentElement.style.setProperty('--fg-color', 'black');
      document.documentElement.style.setProperty('--fg-color-soft', '#333333');
      document.documentElement.style.setProperty('--primary-color', '#0477db');
      document.getElementById('name').textContent = 'France Hémain';
    } else {
      document.documentElement.style.setProperty('--bg-color', 'black');
      document.documentElement.style.setProperty('--fg-color', 'white');
      document.documentElement.style.setProperty('--fg-color-soft', '#f0f0f0');
      document.documentElement.style.setProperty('--primary-color', '#0477db');
      document.getElementById('name').textContent = 'Projects';
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

function scroll_projects() {
  document.getElementById('projects').scrollIntoView();
}