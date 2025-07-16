function abrirMapa() {
  window.open("https://www.google.com/maps?q=Avenida+Guarulhos,+3051+-+Ponte+Grande,+Guarulhos,+SP", "_blank");
}

window.addEventListener('click', () => {
  const musica = document.getElementById('musica');
  if (musica && musica.paused) {
    musica.play();
  }
});