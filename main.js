var closeButton = document.querySelector('#closex');
var welcomeBannerDisappear = document.querySelector('.welcome');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome() {
  welcomeBannerDisappear.style.display = "none";
}
