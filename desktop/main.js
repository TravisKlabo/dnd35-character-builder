const { app, BrowserWindow, Menu, session } = require('electron');
const path = require('path');

const isDevelopment = !app.isPackaged;

function createWindow() {
  const window = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 980,
    minHeight: 720,
    backgroundColor: '#f4efe5',
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: true
    }
  });

  window.once('ready-to-show', () => window.show());
  window.loadFile(path.join(__dirname, '..', 'index.html'));

  window.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  window.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) event.preventDefault();
  });
}

function createMenu() {
  const template = [
    {
      label: 'Character',
      submenu: [
        { role: 'reload', label: 'Reload Builder' },
        { role: 'toggleDevTools', label: 'Developer Tools', visible: isDevelopment },
        { type: 'separator' },
        { role: 'quit', label: 'Exit' }
      ]
    },
    {
      role: 'help',
      submenu: [
        { label: 'About D&D 3.5 Character Builder', click: () => createAboutWindow() }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

function createAboutWindow() {
  const about = new BrowserWindow({
    width: 420,
    height: 250,
    resizable: false,
    parent: BrowserWindow.getFocusedWindow() || undefined,
    modal: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  about.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(`
    <body style="font-family: sans-serif; padding: 24px; background: #f4efe5; color: #263746">
      <h2>D&D 3.5 Character Builder</h2>
      <p>Offline desktop character builder for D&D 3.5 and Dragonlance 3.5.</p>
      <p>Characters are stored locally on this computer.</p>
    </body>
  `)}`);
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((_webContents, _permission, callback) => callback(false));
  createMenu();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
