// Animation de la barre de chargement
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress-bar");
  let width = 0;

  const loading = setInterval(() => {
    if (width >= 100) {
      width = 0; // Recommence si complet (boucle visuelle)
    } else {
      width += 1;
    }
    progressBar.style.width = width + "%";
  }, 520); // Vitesse (plus petit = plus rapide)
});
