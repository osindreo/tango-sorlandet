const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("show")));document.querySelectorAll(".reveal").forEach(x=>o.observe(x));


/* V62 – four-second showcase carousel */
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".event-showcase");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll(".event-showcase-slide")];
  const dots = [...carousel.querySelectorAll(".event-showcase-dots button")];
  const prev = carousel.querySelector(".event-showcase-arrow.prev");
  const next = carousel.querySelector(".event-showcase-arrow.next");
  if (!slides.length) return;

  let index = 0;
  let timer = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const interval = Number(carousel.dataset.interval) || 4000;

  function showSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  function start() {
    if (reducedMotion) return;
    stop();
    timer = setInterval(() => showSlide(index + 1), interval);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  prev?.addEventListener("click", () => { showSlide(index - 1); start(); });
  next?.addEventListener("click", () => { showSlide(index + 1); start(); });
  dots.forEach((dot, i) => dot.addEventListener("click", () => { showSlide(i); start(); }));

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) start();
  });

  showSlide(0);
  start();
});
