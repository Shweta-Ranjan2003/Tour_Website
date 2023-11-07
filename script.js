  const header = document.querySelector('.header');

  const contactButton = document.querySelector('.btn.btn-primary');

    function displayAlert() {
      alert('Thank you for contacting us!');
    }
  
  contactButton.addEventListener('click', displayAlert);


  const subtitle = document.querySelector('.section-subtitle');

    window.addEventListener('click', function() {
      subtitle.textContent = 'Welcome to Our Travel World';
    });


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}


const goTopButton = $('.go-top');
goTopButton.addEventListener('click', scrollToTop);
