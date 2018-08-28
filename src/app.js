const {app, BrowserWindow} = require('electron');
const pomodoro = require('./pomodoro');
const path = require('path');

app.on('ready', _ => {
    win = new BrowserWindow({
        width: 400,
        height: 400,
    });

    pomodoro();

    win.loadURL(`file://${__dirname}/pomodoro.html`);

    win.on('closed', _ =>{
        win = null;
    });
});