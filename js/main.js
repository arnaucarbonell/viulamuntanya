document.addEventListener("DOMContentLoaded", function () {
  /* --- menú mòbil --- */
  var toggle = document.querySelector(".nav__toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- revelat suau en fer scroll ---
     El contingut ja és visible per CSS per defecte. Només si aquest script
     s'executa afegim la classe "reveal-pending" (que sí amaga l'element) i
     tot seguit l'anem revelant amb l'IntersectionObserver. Així, si JS falla
     o triga a carregar, l'usuari sempre veu el contingut. */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    revealEls.forEach(function (el) { el.classList.add("reveal-pending"); });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

    /* --- carrusel de fotos de producte ---
     Manual: no gira sol. Es passa amb les fletxes, els punts o el dit. */
  document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector(".product-carousel__track");
    var slides = track ? track.querySelectorAll("img") : [];
    if (!track || slides.length < 2) {
      carousel.classList.add("is-single");
      return;
    }

    var prev = carousel.querySelector(".product-carousel__nav--prev");
    var next = carousel.querySelector(".product-carousel__nav--next");
    var dotsBox = carousel.querySelector(".product-carousel__dots");
    var dots = [];

    if (dotsBox) {
      slides.forEach(function (img, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", "Foto " + (i + 1) + " de " + slides.length);
        dot.addEventListener("click", function () { goTo(i); });
        dotsBox.appendChild(dot);
        dots.push(dot);
      });
    }

    function current() { return Math.round(track.scrollLeft / track.clientWidth); }
    function goTo(i) { track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" }); }
    function sync() {
      var i = current();
      dots.forEach(function (d, n) { d.setAttribute("aria-selected", n === i ? "true" : "false"); });
      if (prev) prev.disabled = i <= 0;
      if (next) next.disabled = i >= slides.length - 1;
    }

    if (prev) prev.addEventListener("click", function () { goTo(Math.max(current() - 1, 0)); });
    if (next) next.addEventListener("click", function () { goTo(Math.min(current() + 1, slides.length - 1)); });

    var timer;
    track.addEventListener("scroll", function () {
      clearTimeout(timer);
      timer = setTimeout(sync, 80);
    });
    window.addEventListener("resize", sync);
    sync();
  });
});
