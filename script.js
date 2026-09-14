const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("show")));document.querySelectorAll(".reveal").forEach(x=>o.observe(x));

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


/* V88 – rotate the three advertisement images independently of screen size */
(function(){
  const slides = Array.from(document.querySelectorAll('.event-showcase-slide'));
  if (slides.length < 2) return;
  let current = 0;
  slides[current].classList.add('is-active');
  setInterval(() => {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 5000);
})();
