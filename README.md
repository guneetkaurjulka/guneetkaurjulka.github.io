# guneetkaurjulka.github.io

Professional portfolio for **Guneet Kaur Julka**, Business Development Manager, Singapore.
Live at <https://guneetkaurjulka.github.io/>.

A single static page with plain HTML, CSS and JavaScript. There is no build step and nothing to install.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | All page content |
| `assets/style.css` | Design: jade, coral and ochre palette, light, sepia and dark themes |
| `assets/main.js` | Theme switch, active-section nav, scroll fade-in, profile photo loader |
| `assets/favicon.svg` | Browser tab icon |
| `404.html` | "Page not found" page |
| `robots.txt`, `sitemap.xml` | Search-engine hints |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are, without Jekyll |

## Preview locally

```bash
python3 -m http.server 8040
```

Then open <http://localhost:8040>.

## Common edits

- **Profile photo:** paste a hosted image URL into `data-photo="…"` on the `.photo` element in `index.html`.
  The image is loaded from that URL and never committed here. A LinkedIn photo URL
  (right-click the photo → *Copy image address*) works, but LinkedIn's links expire after a while.
  When one stops loading, the page falls back to the "GK" monogram, so update the URL from time to time.
- **Theme:** visitors choose light, sepia or dark in the top bar. The choice is saved in their browser.
  Colours are CSS variables at the top of `assets/style.css`.
- **Privacy:** no email address, phone number or CV PDF is published. LinkedIn is the only contact route.
  Source documents live in `samples/`, which is git-ignored.

## GitHub Pages

This repository is the account's *user site* (`<username>.github.io`), so GitHub publishes it from the default branch.

1. **Settings → Pages → Build and deployment:** set the source to *Deploy from a branch*, choose `main`, folder `/ (root)`.
2. Tick **Enforce HTTPS** on the same screen.
3. Push to `main`. The site updates within a minute or two; the *Actions* tab shows the "pages build and deployment" run.
4. *Optional:* for a custom domain, add a `CNAME` file containing the domain, point the domain's DNS at GitHub Pages, and set the domain in **Settings → Pages**.

Before this redesign, GitHub rendered `README.md` as the home page. Now that `index.html` is at the root, it takes over automatically.
