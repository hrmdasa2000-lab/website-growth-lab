# Bilingual Developer Portfolio

A responsive English/Persian portfolio built with React and Vite. Includes a language switch, RTL layout, project cards, services, workflow, and a contact form that saves a draft in the visitor's browser only.

## Run locally

1. Install Node.js (LTS or newer).
2. In this folder, run `npm install`
3. Run `npm run dev`
4. Open the local URL printed in the terminal.

## Publish free with GitHub Pages

1. Create a new GitHub repository, for example `portfolio`.
2. Upload the contents of this folder to the repository root (including `.github/workflows/deploy.yml`).
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.
4. Push to the `main` branch. The workflow builds the site and publishes it automatically.
5. Your URL will usually be `https://YOUR-USERNAME.github.io/portfolio/`.

## Before publishing

- Replace the sample email `hello@example.com` in `src/main.jsx` with your real professional email.
- Update the name/role copy if you want a specific public name.
- Keep project descriptions accurate. The third project is explicitly marked as a concept, not a live client project.

## Contact form note

The form validates required fields and stores the message as a local draft in the visitor's browser. It does **not** send an email or upload data to a server. For real submissions, connect a form service or backend and update the submit handler.
