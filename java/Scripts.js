
(function () {
    "use stict"
    const slideTimeout = 3500;
    const $slides = document.querySelectorAll('.slide');
    let $dots;
    let intervalId;
    let currentSlide = 1;
    function slideTo(index) {
        // Vérifie si l'index est valide (compris entre 0 et le nombre de slides - 1)
        currentSlide = index >= $slides.length || index < 1 ? 0 : index;
        // Boucle sur tous les éléments de type "slide" pour les déplacer
        $slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`);
        // Boucle sur tous les "dots" pour mettre à jour la couleur par la classe "active" ou "inactive"
        $dots.forEach(($elt, key) => $elt.classList = `dot ${key === currentSlide? 'active': 'inactive'}`);
    }
    // Fonction pour afficher le prochain slide
    function showSlide() {
        slideTo(currentSlide);
        currentSlide++;
    }
    for (let i = 1; i <= $slides.length; i++) {
        let dotClass = i == currentSlide ? 'active' : 'inactive';
        let $dot = `<span data-slidId="${i}" class="dot ${dotClass}"></span>`;
        document.querySelector('.carousel-dots').innerHTML += $dot;
    }
    $dots = document.querySelectorAll('.dot');
    intervalId = setInterval(showSlide, slideTimeout)
    $slides.forEach($elt => {
        let startX;
        let endX;
        $elt.addEventListener('mouseover', () => {
            clearInterval(intervalId);
        }, false)
        $elt.addEventListener('mouseout', () => {
            intervalId = setInterval(showSlide, slideTimeout);
        }, false);
        $elt.addEventListener('touchstart', (event) => {
            startX = event.touches[0].clientX;
        });
        $elt.addEventListener('touchend', (event) => {
            endX = event.changedTouches[0].clientX;
            if (startX > endX) {
                slideTo(currentSlide + 1);
            } else if (startX < endX) {
                slideTo(currentSlide - 1);
            }
        });
    })
})()


document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
  });
  // Fait défiler la page vers le haut de manière fluide lorsque le bouton est cliqué
  function scrollToTop() {
    document.body.scrollTop = 0; // Pour les navigateurs Safari
    document.documentElement.scrollTop = 0; // Pour les autres navigateurs
  }

//Menu Hamburger
function toggleMenu() {
    var x = document.getElementById("idmenuresp");//select element with id menuresp
    if (x.style.display === "block") {//vérifie si display visible
        x.style.display = "none";//si oui, il est caché
    } else {
        x.style.display = "block";//sinon affiche le
    }
}