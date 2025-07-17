function abrirMapa() {
  window.open("https://maps.app.goo.gl/ah5VPeXMhKcAQiBa6", "_blank");
}

window.addEventListener('click', () => {
  const musica = document.getElementById('musica');
  if (musica && musica.paused) {
    musica.play();
  }
});