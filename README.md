# TangoSørlandet

## Ny filstruktur

Nettsiden og media er holdt mest mulig adskilt:

- `index.html` – innhold og struktur
- `style.css` – utseende
- `script.js` – funksjoner
- `lang.js` – språk
- `assets/images/` – bilder
- `assets/video/` – lokale videofiler

### Arbeidsflyt

Når du gjør endringer i tekst, layout eller funksjoner, kan du jobbe med nettsidefilene uten å legge ved bildene i ChatGPT.

Når bilder/video skal endres, håndteres de separat i `assets/images/` og `assets/video/`.

### GitHub Pages

Mappene `assets/images/` og `assets/video/` må fortsatt ligge i GitHub-repositoriet for at nettsiden skal kunne vise media. Men de trenger ikke endres når du bare gjør en nettsideendring.

Se også `assets/README.md`.
