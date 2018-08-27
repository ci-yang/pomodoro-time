const {app, BrowserWindow} = require('electron');

app.on('ready', _ => {
    win = new BrowserWindow({
        width: 400,
        height: 400,
    });

    win.on('closed', _ =>{
        win = null;
    });
});