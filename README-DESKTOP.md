# Desktop App

The builder can run as an offline Electron application on Linux, Windows, and macOS. The desktop shell loads the existing HTML, CSS, and JavaScript directly, so no local web server is required for the packaged app.

## Prerequisites

Install Node.js 18 or newer and npm on the build machine.

## Run locally

```bash
npm install
npm start
```

## Build installers

```bash
npm run dist:linux
npm run dist:windows
npm run dist:macos
```

Build each target on its native operating system when possible. The output is written to `dist/` by electron-builder.

## Build installers on GitHub

The repository includes a GitHub Actions workflow at `.github/workflows/build-desktop.yml`.

1. Push the workflow file to GitHub.
2. Open the repository's **Actions** tab.
3. Select **Build Desktop Installers** and choose **Run workflow**.
4. Download the Linux, Windows, or macOS artifact from the completed workflow run.

You can also trigger a build by creating and pushing a version tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The workflow builds each installer on its native operating system. macOS builds are unsigned, so macOS may require right-clicking the app and choosing **Open** the first time.

Character data continues to use browser local storage inside the desktop app. JSON export/import and printing remain available from the existing builder controls.
