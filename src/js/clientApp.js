const { app, ipcRenderer } = require('electron');

document.getElementById("start").addEventListener('click', _=>{
    ipcRenderer.send('start-clicked');
});

//get timer number from ipc main
ipcRenderer.on('getTime', (event, count) =>{
    document.getElementById("time").innerHTML = count;
});