const electron = require('electron');
const ipc = electron.ipcRenderer;
const Store = require('electron-store');
const store = new Store();
let status = document.querySelector('#status')
let tt = document.querySelector('#tt')
bg1 = '😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅😅'
bg2 = '😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆💩😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆😆'
function start(){
    let btn = document.querySelector('#btn');
    let username = document.querySelector('#username')
    let password = document.querySelector('#password')
    if(store.get('loginData')){
        username.value = store.get('loginData')[0]
        password.value = store.get('loginData')[1]
    }
    let tf = false
    btn.addEventListener('mousedown', () => {
        btn.innerHTML = 'In!✨'
        btn.style.background = '#ff2a99'
        tf = true
    })
    document.addEventListener('mouseup', () => {
        if (tf) {
            btn.innerHTML = 'Log🐱‍🏍'
            btn.style.background = '#1f539e'
            tf = false
            if(password.value.length == 0 && username.value.length == 0){
                status.innerHTML='请输入账号密码🤔'
                    password.style.borderColor = '#f53030'
                    username.style.borderColor = '#f53030'
                status.style.color='#ff2a99'
                status.style.display = 'block'
                tt.innerHTML=bg1
            }else{
                if (username.value.length == 0) {
                    username.style.borderColor = '#f53030'
                    status.innerHTML='请输入账号🤔'
                    status.style.color='#ff2a99'
                    status.style.display = 'block'
                    tt.innerHTML=bg1
                }
                if (password.value.length == 0) {
                    password.style.borderColor = '#f53030'
                    status.innerHTML='请输入密码🤔'
                    status.style.color='#ff2a99'
                    status.style.display = 'block'
                    tt.innerHTML=bg1
                }
            }
               
            if(password.value.length != 0 && username.value.length != 0){
                ipc.send('login',[username.value,password.value])
            }
        } else {
            return
        }
    })
    username.addEventListener('keydown', () => {
        username.style.borderColor = 'rgb(63, 108, 255)'
    })
    password.addEventListener('keydown', () => {
        password.style.borderColor = 'rgb(63, 108, 255)'
    })
}
start()
status.addEventListener('animationend',()=>{
    status.style.display='none'
})
function tools(){
    let close = document.querySelector('#Tools')
    close.addEventListener('click',()=>{
        ipc.send('close')
    })
}
tools()
function stat(){
    ipc.on('unSuccessful',()=>{
        tt.innerHTML=bg1
        status.innerHTML='用户或密码错误!🤔'
        status.style.color='#ff2a99'
        status.style.display = 'block'
    })
    ipc.on('successful',()=>{
        status.innerHTML='登录成功,将持续保持登录👌'
        status.style.color='#1f539e'
        status.style.display = 'block'
        store.set('loginData',[username.value,password.value])
        tt.innerHTML=bg2
        let notification = new Notification('💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩', {
            body: '登录成功',
          })
    })
    ipc.on('reconnection',()=>{
        tt.innerHTML=bg1
        let notification = new Notification('😪😪😪😪😪😪😪😪😪😪😪😪😪😪😪', {
            body: '断开连接,尝试重连......🧷',
          })
    })
    ipc.on('connection',()=>{
        tt.innerHTML=bg1
        let notification = new Notification('🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪', {
            body: '连接成功!🎉',
          })
    })
    
}
stat()