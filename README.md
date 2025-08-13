# San-A-Verf Website

A responsive multi-page website for San-A-Verf, a renovation and painting company in Suriname. The site is built with Tailwind CSS and plain JavaScript.

## Features
- Mobile-friendly navigation with a toggleable menu
- Dynamic footer year handled by JavaScript
- Pages for Startpagina, Over ons, Diensten, and Contact
- Contact form with basic fields for visitors
- Tailwind CSS configuration and compiled stylesheet

## Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build Tailwind CSS (rebuilds `styles.css` from `src/tailwind.css`):
   ```bash
   npx tailwindcss -i ./src/tailwind.css -o ./styles.css --watch
   ```
3. Open `index.html` in a browser or serve the folder with a static server.

## Testing
Currently, no automated tests are implemented. Running `npm test` will exit with an error until tests are added.
