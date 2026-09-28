import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function init() {
  // -----------------
  // ELEMENTS
  // -----------------

  const scene = document.querySelector(".scene");
  const point = document.querySelector(".dot1");
  const line = document.querySelector(".line");
  const text = document.querySelector(".text");

  // -----------------
  // POSITION DE DEPART
  // -----------------

  gsap.set(point, {
    xPercent: -50,
    yPercent: -50,
  });

  const linePath = line.querySelector("path");

  const lineLength = linePath.getTotalLength();

  gsap.set(linePath, {
    strokeDasharray: lineLength,
    strokeDashoffset: lineLength,
  });

  gsap.set(".dot2, .dot3, .dot4, .dot5, .dot6, .dot7, .dot8", {
    opacity: 0,
    scale: 0,
  });

  gsap.set(".connection", {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left center",
  });

  // -----------------
  // TIMELINE
  // -----------------

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: scene,
      start: "top top",
      end: "+=4000",
      pin: true,
      scrub: true,
      markers: true,
    },
  });

  // -----------------
  // FONCTION TEXTE
  // -----------------

  function setText(newText) {
    timeline.to(text, {
      opacity: 0,
      duration: 0.2,
    });

    timeline.set(text, {
      textContent: newText,
    });

    timeline.to(text, {
      opacity: 1,
      duration: 0.2,
    });
  }

  // -----------------
  // TEXTE DE DEPART
  // -----------------

  timeline.set(text, {
    textContent: "Tout commence par une idée.",
    opacity: 1,
  });

  // -----------------
  // 1. PREMIER POINT GROSSIT
  // -----------------

  timeline.to(point, {
    scale: 3,
    duration: 1,
  });

  // -----------------
  // 2. PREMIER POINT SE DEPLACE
  // -----------------

  setText("Puis quelqu’un ose la partager.");

  timeline.to(point, {
    x: -420,
    y: -20,
    scale: 3,
    duration: 3,
  });

  // -----------------
  // 3. LIGNE COURBEE
  // -----------------

  timeline.to(
    linePath,
    {
      strokeDashoffset: 0,
      duration: 5,
      ease: "none",
    },
    "<",
  );

  // -----------------
  // 4. DOT2
  // -----------------

  timeline.to(".dot2", {
    opacity: 1,
    scale: 2,
    y: -190,
    duration: 1,
  });

  setText("Quelqu’un décide d’essayer.");

  // -----------------
  // 5. DOT3
  // -----------------

  timeline.to(".dot3", {
    opacity: 1,
    scale: 1,
    duration: 1,
    y: 20,
    x: 60,
  });

  // -----------------
  // 6. DOT4
  // -----------------

  timeline.to(".dot4", {
    opacity: 1,
    scale: 1,
    duration: 1,
    y: -310,
    x: -110,
  });

  setText("Quelqu’un lui donne vie.");

  // -----------------
  // 7. LIGNES
  // -----------------

  timeline.to(".connection1", {
    opacity: 1,
    scaleX: 1,
    duration: 1,
  });

  setText("Une autre idée arrive.");

  timeline.to(".connection2", {
    opacity: 1,
    scaleX: 1,
    duration: 1,
  });

  timeline.to(".connection3", {
    opacity: 1,
    scaleX: 1,
    duration: 1,
  });

  // -----------------
  // 8. FEUILLE
  // -----------------

  timeline.to(".feuille", {
    opacity: 1,
    duration: 1,
    rotate: 170,
    y: 210,
    x: -215,
  });

  setText("Puis une autre.");

  // -----------------
  // 9. DOT5
  // -----------------

  timeline.to(".dot5", {
    opacity: 1,
    scale: 1,
    duration: 1,
  });

  // -----------------
  // 10. DOT6
  // -----------------

  timeline.to(".dot6", {
    opacity: 1,
    scale: 1,
    duration: 1,
  });

  // -----------------
  // 11. DOT7
  // -----------------

  timeline.to(".dot7", {
    opacity: 1,
    scale: 1,
    duration: 1,
    x: -110,
    y: -60,
  });

  // -----------------
  // 12. DOT8
  // -----------------

  timeline.to(".dot8", {
    opacity: 1,
    scale: 1,
    duration: 1,
    y: -105,
    x: -80,
  });

  // -----------------
  // 13. PAYSAGE 1
  // -----------------

  timeline.to(".paysage1", {
    opacity: 1,
    duration: 1,
  });

  setText("Et parfois, quelque chose de nouveau apparaît.");

  // -----------------
  // 14. PAYSAGE 2
  // -----------------

  timeline.to(".paysage2", {
    opacity: 1,
    duration: 1,
  });

  // -----------------
  // 15. PAYSAGE 3
  // -----------------

  timeline.to(".paysage3", {
    opacity: 1,
    duration: 1,
  });

  setText("Et l’idée devient réalité.");

  // -----------------
  // 16. PAYSAGE 4
  // -----------------

  timeline.to(".paysage4", {
    opacity: 1,
    duration: 1,
  });
}

window.addEventListener("load", init);
