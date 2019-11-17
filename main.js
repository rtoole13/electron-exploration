const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const shell = require('electron').shell

function createWindow(){
    //----MAIN WINDOW----//
    // Create browser window
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    })

    // Load index.html
    win.loadFile('index.html')

    // Open dev tools
    win.webContents.openDevTools()

    // On close handler
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })

    //----MENU----//
    let menu = Menu.buildFromTemplate([
        {
            label: 'Library'
        },
        {
            label: 'Streams'
        },
        {
            label: 'Social'
        },
        {
            label: 'Account'
        },
        {
            label: 'Settings'
        },
        {
            label: 'Help',
            click(){
                shell.openExternal('http://github.com/rtoole13')
            }
        },
        {
            label: 'Exit',
            click(){
                app.quit()
            },
            accelerator: 'CmdOrCtrl+Z'
        },
    ])
    Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit on close
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    // Gross!
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    // Also gross.
    if (win === null){
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
