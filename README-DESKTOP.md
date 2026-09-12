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

Character data continues to use browser local storage inside the desktop app. JSON export/import and printing remain available from the existing builder controls.
