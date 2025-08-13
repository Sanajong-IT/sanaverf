# San-A-Verf Website

A static, responsive website for the San-A-Verf renovation and painting company. The site uses plain HTML, a small JavaScript file for interactive behavior, and [Tailwind CSS](https://tailwindcss.com/) that has been precompiled into `styles.css` so no build step or dependencies are required.

## Project Structure
- `index.html` – Landing page with service highlights and calls to action
- `about.html` – Company background and values
- `services.html` – Detailed list of renovation and painting offerings
- `contact.html` – Contact information and a simple inquiry form
- `assets/` – Images and other static assets
- `script.js` – Handles mobile menu toggling and dynamic footer year
- `styles.css` – Precompiled Tailwind CSS stylesheet

## Getting Started
No installation is necessary. Clone or download the repository and open `index.html` in your browser. To preview with a local web server, you can use Python:

```bash
python -m http.server 8000
```

Then navigate to `http://localhost:8000`.

## Customization
- Edit the HTML files to change content or structure
- Replace images in the `assets/` directory
- Modify `script.js` to add or adjust interactive behavior

If you need to regenerate the stylesheet, install Tailwind CSS and rebuild `styles.css`, but this is optional for using the site.

## Linting
GitHub Actions runs HTMLHint and ESLint on every push to catch markup and script issues.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
=======

