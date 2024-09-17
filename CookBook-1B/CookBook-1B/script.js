const goToTopButton = document.getElementById('go-to-top');

goToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById("go-to-top").addEventListener("click", function() {
  window.scrollTo(0, 0);
});
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentNode;
    const details = parent.querySelector('.details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  });
});
