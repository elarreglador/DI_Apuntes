const {app, BrowserWindow}=require('electron')


function createWinndow() {
    let mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    })
    mainWindow.setMenu(null);
    mainWindow.loadFile('index.html');
    //mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWinndow);
app.allowRendererProcessReuse = true;