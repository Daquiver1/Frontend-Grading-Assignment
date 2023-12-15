

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const page = this.getAttribute('href');
    window.location.href = page;
  });
});
