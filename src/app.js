/*To define the Main Process for our app, we will open src/app.js and 
include the app module to start the app, and the browser-window module 
to create the various windows of our app (both part of the Electron core), as such:*/

const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron; 

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });

    mainWindow.loadURL('file://' + __dirname + '/windows/main/main.html');
    mainWindow.openDevTools();

    //quit entire application on closing mainWindow
    mainWindow.on('close', function(){
        app.quit();
    })    
});

function createInsertWindow() {
    insertWindow = new BrowserWindow({
        width: 640,
        height: 480,
        show: false
    });
    
    insertWindow.loadURL('file://' + __dirname + '/windows/insert/insert.html');
    
    insertWindow.on('closed',function() {
        insertWindow = null;
    });
}

