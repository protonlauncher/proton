import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow | null;

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;

    return Promise.all(
        ['REACT_DEVELOPER_TOOLS'].map(name => installer.default(installer[name], forceDownload))
    ).catch(console.log); // eslint-disable-line no-console
};

const createWindow = async () => {
    if (process.env.NODE_ENV !== 'production') {
        await installExtensions();
    }

    win = new BrowserWindow({
        // Layout
        center: true,
        width: 800,
        minWidth: 800,
        maxWidth: 1920,
        height: 600,
        minHeight: 600,
        maxHeight: 1080,

        // Title bar
        fullscreenable: false,
        maximizable: false,                     // not implemented on linux
        title: 'Proton Launcher',
        icon: '../resources/proton_r2.png',     // todo this doesnt work

        // Other
        backgroundColor: '#121212',
    });

    win.setMenu(null);

    if (process.env.NODE_ENV !== 'production') {
        process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'; // eslint-disable-line require-atomic-updates
        win.loadURL(`http://localhost:3000`);
    } else {
        win.loadURL(
            url.format({
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file:',
                slashes: true
            })
        );
    }

    if (process.env.NODE_ENV !== 'production') {
        // Open DevTools, see https://github.com/electron/electron/issues/12438 for why we wait for dom-ready
        win.webContents.once('dom-ready', () => {
            win!.webContents.openDevTools();
        });
    }

    win.on('closed', () => {
        win = null;
    });
};

app.on('ready', () => {
    createWindow();
    create();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

function create() {
    // const window = new BrowserWindow({
    //     width: 800,
    //     height: 600
    // });
    // window.setMenu(null);
    // window.loadURL('http://localhost:3000/settings');
    // window.show();
}