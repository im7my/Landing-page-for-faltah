# Faltah Landing Page (Static, Privacy‑First)

This is a simple, bilingual (AR/EN) landing page for **Faltah**, with a Tally form embedded.

## Files
- `index.html` — the main page
- `styles.css` — styling (dark, blue × white, glassmorphism)
- `script.js` — language toggle + smooth scroll
- `assets/logo.svg` — simple placeholder logo
- `assets/og-fallback.png` — social preview fallback

## Replace/Edit
- Text is bilingual. Use the language toggle to preview both. Edit text inside `script.js` (the `dict` object) or directly in `index.html` elements.
- Tally form is embedded at: `https://tally.so/r/mekRol`. Replace the URL if your form changes.
- If you want a custom domain (e.g., `faltah.tech`) on GitHub Pages, add a `CNAME` file with just the domain name.

## 1) Publish FREE on GitHub Pages
1. Create a new repository on GitHub (Public).
2. Upload all files in this folder to the repo root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` (or `master`) and folder `/ (root)`, then **Save**.
6. GitHub will give you a live URL like `https://yourname.github.io/reponame/` within a minute.

### Optional: Custom Domain (`faltah.tech` with IONOS)
1. In your repo, create a file named `CNAME` (no extension) containing exactly: `faltah.tech`
2. In IONOS DNS, set a **CNAME** record for `www` to your GitHub Pages host (e.g., `yourname.github.io.`) and add an **A** record for the apex (`faltah.tech`) to GitHub’s IPs or use `ALIAS/ANAME` if available. See GitHub docs for the latest IPs.
3. In **Settings → Pages**, ensure the custom domain shows `faltah.tech` and enable HTTPS.

> Tip: If you don't want the site indexed by search engines, keep `<meta name="robots" content="noindex, nofollow">` as is.

## 2) Update the Waitlist Form
- Edit the `<iframe>` `src` in `index.html` if you change the Tally form.
- You can also adjust the iframe height from `600` to fit your form length.

## 3) Keep Sensitive Info Safe
- This page intentionally avoids sharing detailed financials.
- For investors, use the “Contact & Partnerships” section and share detailed docs under NDA off‑site.

## Local preview
Just open `index.html` in your browser. No build tools needed.
