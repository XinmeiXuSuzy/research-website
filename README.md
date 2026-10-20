# Xinmei (Suzy) Xu — personal website

Static site (no build step) in the style of al-folio.

- `index.html` about / news / selected publications
- `publications.html`, `projects.html`, `cv.html`
- `assets/css/main.css` theme (light/dark), `assets/js/main.js` (dark-mode toggle, BibTeX toggle, mobile menu)
- `assets/img/prof_pic.jpg`, `assets/pdf/Xinmei_Xu_CV.pdf`

Preview locally: `python3 -m http.server` then open http://localhost:8000

Deploy to GitHub Pages: create a repo named `<username>.github.io`, push these files to it,
then turn on Settings → Pages → Deploy from branch `main` / root.

TODO: in index.html, fill in the Google Scholar / GitHub / LinkedIn links (commented out in the social section).
