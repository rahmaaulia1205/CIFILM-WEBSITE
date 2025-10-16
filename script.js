// Membatasi scroll agar berhenti di Top Collection
window.addEventListener("scroll", () => {
  const maxScroll = document.querySelector("#top-collection").offsetTop + document.querySelector("#top-collection").offsetHeight - window.innerHeight;
  if (window.scrollY > maxScroll) {
    window.scrollTo(0, maxScroll);
  }
});

function sendMessage(event) {
  event.preventDefault();
  document.getElementById('success-message').style.display = 'block';
  document.querySelector('.contact-form').reset();
  return false;
}