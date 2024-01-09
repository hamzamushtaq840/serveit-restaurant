# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

npm run generate-pwa-assets

BONUS TIP: Deploying PWA on IIS Server
If you deploy this app on an IIS server, you may face an issue where your .webmanifest file was not found even though all other files were found. To resolve this issue, make sure your IIS can handle the .webmanifest extension by adding an entry for .webmanifest in the global IIS MIME types.