const {BrowserWindow,app,Menu,Tray,ipcMain} = require('electron')
const path = require('path')
const rc4 = require('./rc4')
const qs = require('qs')
const axios = require('axios')
const Store = require('electron-store')
Store.initRenderer()
mainWindow = null
tray = null
app.setAppUserModelId('LogIn!🐴')
app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:395,
        height:300,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        },
        resizable:false,
        show:false,
        frame:false
    })
    mainWindow.on('ready-to-show',()=>{
        mainWindow.show()
    })
    mainWindow.loadFile('./index.html')
    mainWindow.setMenu(null);
    tray = new Tray(path.join(__dirname,'/icon.png'));
    const contextMenu = new Menu.buildFromTemplate([{
        label: '退出',
            click: function () {
                mainWindow.close();
            }
    }])
    tray.setContextMenu(contextMenu)
    tray.setToolTip('💩💩💩')
    tray.on('click', () => {
        mainWindow.show();
    mainWindow.setSkipTaskbar(false);

    });
    ipcMain.on('close',()=>{
        mainWindow.hide();
    mainWindow.setSkipTaskbar(true);

    })






    ipcMain.on('login',(event,data)=>{
        has = +(new Date()) + ''
        let pass = rc4.crypt(data[1],has)
        let user = data[0]
        rqst = {
            'opr': 'pwdLogin',
            'userName': user,
            'pwd': pass,
            'auth_tag': has,
            'rememberPwd': '0'
        }
        config = {
            method: 'post',
            url: 'http://1.1.1.3/ac_portal/login.php',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0',
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: qs.stringify(rqst)
        }




        axios(config).then(function (response) {
            let tf = true
            obj = JSON.parse(response.data.replace(/'/g, '"'))
            if (obj.msg == '用户名或密码错误') {
                mainWindow.webContents.send('unSuccessful')
                return
            }
            if (obj.msg == 'logon success') {
                mainWindow.webContents.send('successful')
                setInterval(() => {
                    axios.get('https://www.baidu.com/').then(function (response) {
                        if (response.status != 200) {
            
                        } else {
                            if(tf ==false){
                                mainWindow.webContents.send('connection')
                                tf = true
                            }
                        }
                    }).catch(function (err) {
                        if (err) {
                            if(tf == true){
                                mainWindow.webContents.send('reconnection')
                                tf = false
                            }
                            axios(config).then(function (response) {}).catch(function (err) {})
                        }
                    })
                }, 2000);
            }
        }).catch(function (err) {})




    })
})