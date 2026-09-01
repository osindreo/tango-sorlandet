const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("show")));document.querySelectorAll(".reveal").forEach(x=>o.observe(x));

/* V71 – responsive event image showcase: 3 desktop / 2 tablet / 1 mobile, 5 seconds. */
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".event-showcase");
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll(".event-showcase-slide")];
  if (!slides.length) return;

  let startIndex = 0;
  let timer = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const interval = 5000;

  function visibleCount() {
    if (window.matchMedia("(max-width: 700px)").matches) return 1;
    if (window.matchMedia("(max-width: 1000px)").matches) return 2;
    return 3;
  }

  function showSet(index = 0) {
    const count = visibleCount();
    startIndex = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const offset = (i - startIndex + slides.length) % slides.length;
      slide.classList.toggle("active", offset < count);
    });
  }

  function nextSet() {
    showSet(startIndex + visibleCount());
  }

  function start() {
    if (reducedMotion) return;
    stop();
    timer = setInterval(nextSet, interval);
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  let lastCount = visibleCount();
  window.addEventListener("resize", () => {
    const count = visibleCount();
    if (count !== lastCount) { lastCount = count; showSet(startIndex); }
  });

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", event => { if (!carousel.contains(event.relatedTarget)) start(); });

  showSet(0);
  start();
});


/* V78 – fullscreen for embedded Facebook instruction reels */
document.addEventListener('click', function(e){
  const btn = e.target.closest('.reel-fullscreen-btn');
  if (!btn) return;
  const frame = btn.closest('.reel-instruction-frame');
  const iframe = frame && frame.querySelector('iframe');
  if (!iframe) return;
  try {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (frame.requestFullscreen) {
      frame.requestFullscreen();
    } else if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    }
  } catch (err) {
    // Facebook's own player fullscreen control remains available.
  }
});
