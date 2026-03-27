document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const successMessage = document.getElementById("successMessage");

  // Form submit
  form.addEventListener("submit", function () {
    setTimeout(() => {
      form.reset();
      successMessage.style.display = "block";
    }, 200);
  });
  document.querySelectorAll(".navbar-nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Gallery elements
  const galleryThumbs = document.querySelectorAll(".gallery-thumb");
  const carouselInner = document.getElementById("carouselInner");

  // Image data
  const galleryData = {
    library: [
      "images/library1.jpg",
      "images/library2.jpg",
      "images/library3.jpg",
      "images/library4.jpg",
      "images/library5.jpg",
      "images/library6.jpg",
      "images/library7.jpg",
      "images/library8.jpg",
      "images/library9.jpg",
      "images/library10.jpg",
      "images/library11.jpg",
    ],
    summer: [
      "images/summer1.jpg",
      "images/summer2.jpg",
      "images/summer3.jpg",
      "images/summer4.jpg",
      "images/summer5.jpg",
      "images/summer6.jpg",
      "images/summer7.jpg",
      "images/summer8.jpg",
      "images/summer9.jpg",
      "images/summer0.jpg",
      "images/summer11.jpg",
    ],
    training: [
      "images/training1.jpg",
      "images/training2.jpg",
      "images/training3.jpg",
      "images/training4.jpg",
      "images/training5.jpg",
      "images/training6.jpg",
      "images/training7.jpg",
      "images/training8.jpg",
      "images/training9.jpg",
      "images/training0.jpg",
      "images/training11.jpg",
      "images/training12.jpg",
    ],
    charity: [
      "images/charity1.jpg",
      "images/charity2.jpg",
      "images/charity3.jpg",
      "images/charity4.jpg",
      "images/charity5.jpg",
    ],
  };

  // Gallery click handler
  galleryThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const category = thumb.closest(".gallery-item").dataset.category;

      carouselInner.innerHTML = "";

      galleryData[category].forEach((src, i) => {
        const activeClass = i === 0 ? "active" : "";
        carouselInner.innerHTML += `
          <div class="carousel-item ${activeClass}">
            <img src="${src}" class="d-block w-100" alt="${category} ${i + 1}">
          </div>
        `;
      });

      const myModal = new bootstrap.Modal(
        document.getElementById("galleryModal"),
      );
      myModal.show();
    });
  });
});
