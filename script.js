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


/* V89 – Dropbox File Request
   Bytt bare ut URL-en under med lenken fra Dropbox:
   Dropbox → File requests → New request → Copy link
*/
(function(){
  const DROPBOX_UPLOAD_URL = "https://www.dropbox.com/request/7lkmk1b7n4ht7znbip6k";
  const btn = document.getElementById("dropboxUploadBtn");
  if (!btn) return;

  if (DROPBOX_UPLOAD_URL.startsWith("http")) {
    btn.href = DROPBOX_UPLOAD_URL;
  } else {
    btn.addEventListener("click", function(e){
      e.preventDefault();
      alert("Dropbox-opplastingen er ikke koblet til ennå. Legg inn Dropbox File Request-lenken i script.js.");
    });
  }
})();
