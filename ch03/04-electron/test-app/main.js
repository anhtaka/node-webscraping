'use strict';

// モジュールの取り込み
//var app = require('app');
var electron = require('electron');
var app = electron.app;

let mainWindow;

//var BrowserWindow = require('browser-window');
var BrowserWindow = electron.BrowserWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
// メインウインドウを起動 --- (※1)
//var mainWindow = null;
app.on('ready', function(){
  mainWindow = new BrowserWindow({width:800, height:600});
  mainWindow.loadURL('file://' + __dirname + '/index.html'); // ---- (※2)

  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});
