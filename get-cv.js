
function downloadPDF() {
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = 'home-banner2.png';
  link.download = 'home-banner2.png'; // This suggests a filename for the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

 document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('header');
        const logoImg = document.querySelector('.logo-img');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.padding = '0.5rem 0';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                logoImg.style.width = '60px';
            } else {
                header.style.padding = '1rem 0';
                header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                logoImg.style.width = '80px';
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });
  // Smooth scrolling for navigation
  $("a").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top - 70
          }, 800, function(){
              window.location.hash = hash;
          });
      }
  });
  
  // Add active class to current section in navigation
  $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop() + 100;
      
      $('section').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
              $('.nav-link.active').removeClass('active');
              $('.nav-link').eq(i).addClass('active');
          }
      });
  }).scroll();