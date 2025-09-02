const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, 'icon.png') // اگه میخوای آیکون برای اپ باشه
  });

  win.loadFile('index.html'); // همون فایل HTML اصلیت
  win.setMenuBarVisibility(false); // منوی بالای ویندوز رو مخفی می‌کنه
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
