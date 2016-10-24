const electron= require ('electron')
const {app, BrowserWindow} = require('electron')

let onlineStatusWindow

app.on('ready', () => {
    onlineStatusWindow = new BrowserWindow({ width: 400, height: 400, show: true })
    onlineStatusWindow.loadURL(`file://${__dirname}/demos/json.html`)

    onlineStatusWindow.on('closed', () => {
        onlineStatusWindow=null
    })
})
