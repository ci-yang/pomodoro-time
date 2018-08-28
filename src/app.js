const {app, BrowserWindow, ipcMain} = require('electron');
const pomodoro = require('./pomodoro');
const path = require('path');

app.on('ready', _ => {
    win = new BrowserWindow({
        width: 400,
        height: 400,
    });

    win.loadURL(`file://${__dirname}/pomodoro.html`);

    win.on('closed', _ =>{
        win = null;
    });
});


ipcMain.on('start-clicked', _=>{
    console.log("Get start clicked.");
    pomodoro(callback => {
        win.webContents.send('getTime', callback);
    });
});

