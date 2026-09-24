# June Vergel Querol - Personal Website & Portfolio

Static portfolio and utilities website for June Vergel Querol, built with Astro and hosted on GitHub Pages.

- **Live URL**: [https://junequerol.github.io](https://junequerol.github.io)
- **Email**: [cpejune@gmail.com](mailto:cpejune@gmail.com)

---

## 🚀 GitHub Pages Compatibility Notes

This site was converted from a legacy custom domain deployment (`junevergelquerol.com`) to be fully compatible with GitHub Pages:

1. **`.nojekyll`**:
   An empty `.nojekyll` file is included in the root directory. This disables Jekyll processing so GitHub Pages does not ignore Astro's `_astro/` asset directory.

2. **Clean URLs & Root Structure**:
   Static HTML files and subdirectories (`/articles/`, `/guides/`, `/utilities/`, etc.) reside at the root level, allowing native clean URLs on GitHub Pages.

3. **Domain & Metadata Updates**:
   Canonical links, Open Graph metadata, Structured Data (JSON-LD), Google Scholar tags, XML sitemaps, and `robots.txt` have been updated to point to `https://junequerol.github.io`.

4. **Custom 404 Page**:
   A styled dark-theme `404.html` is provided for unmatched URLs.

5. **Automated CI/CD**:
   GitHub Actions workflow in `.github/workflows/deploy.yml` automatically publishes the site whenever changes are pushed to `main`. Alternatively, GitHub Pages can be configured to deploy directly from the `main` branch root.
