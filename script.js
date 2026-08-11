const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("show")));document.querySelectorAll(".reveal").forEach(x=>o.observe(x));

// Tilfeldig rekkefølge i galleriet ved hver sidelasting
document.querySelectorAll(".idebank").forEach(gallery => {
  const images = Array.from(gallery.children);

  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  images.forEach(image => gallery.appendChild(image));
});

