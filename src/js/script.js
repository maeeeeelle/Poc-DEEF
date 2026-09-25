window.addEventListener("scroll", function () {
  /*
        progress = 0 au début
        progress = 1 à la fin
      */

  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  const progress = scrollTop / maxScroll;

  /* -------------------------
         1. LE POINT
      ------------------------- */

  const point = document.querySelector(".point");

  point.style.transform = `translateX(${progress * 400}px)`;

  /* -------------------------
         2. LE TRAIT
      ------------------------- */

  const line = document.querySelector(".line");

  const lineProgress = Math.min(progress * 3, 1);

  line.style.transform = `scaleX(${lineProgress})`;

  /* -------------------------
         3. LES FORMES
      ------------------------- */

  const elements = document.querySelectorAll(".element");

  elements.forEach(function (element, index) {
    const start = 0.2 + index * 0.1;

    if (progress > start) {
      const localProgress = Math.min((progress - start) / 0.15, 1);

      element.style.opacity = localProgress;

      element.style.transform = `scale(${0.5 + localProgress * 0.5})`;
    }
  });

  /* -------------------------
         4. LES PHOTOS
      ------------------------- */

  const photos = document.querySelectorAll(".photo");

  photos.forEach(function (photo, index) {
    const start = 0.45 + index * 0.1;

    if (progress > start) {
      const localProgress = Math.min((progress - start) / 0.15, 1);

      photo.style.opacity = localProgress;

      photo.style.transform = `scale(${0.8 + localProgress * 0.2})`;
    }
  });

  /* -------------------------
         5. LE MESSAGE FINAL
      ------------------------- */

  const final = document.querySelector(".final");

  if (progress > 0.8) {
    const finalProgress = Math.min((progress - 0.8) / 0.2, 1);

    final.style.opacity = finalProgress;
  }
});
