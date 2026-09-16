// Mobilní hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Jednoduchý lightbox pro galerii: klik na náhled otevře plnou fotku v novém okně-overlay
  var galleryLinks = document.querySelectorAll(".gallery-grid a");
  if (galleryLinks.length) {
    var overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = '<img alt="">';
    overlay.style.cssText =
      "position:fixed;inset:0;background:rgba(0,0,0,.9);display:none;" +
      "align-items:center;justify-content:center;z-index:1000;cursor:zoom-out;padding:20px;";
    overlay.querySelector("img").style.cssText =
      "max-width:100%;max-height:100%;border-radius:8px;";
    document.body.appendChild(overlay);

    galleryLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        overlay.querySelector("img").src = link.getAttribute("href");
        overlay.style.display = "flex";
      });
    });
    overlay.addEventListener("click", function () {
      overlay.style.display = "none";
    });
  }
});
