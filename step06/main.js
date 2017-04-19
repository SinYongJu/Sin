/* 주제 : 생선된 윈도우에 HTML 파일을 로딩하기!
애플리케이션에서 'ready' 이벤트가 발생했을 때,
즉 'ready' 상태일 때 보통 브라우저 윈도우를 생성한다.
*/
const {app, BrowserWindow} = require('electron')
const path = require('path') //경로 관련 module//현제 싱행중인 프로그램에서 파일 경로를 다룰 때 사용할 도구이다.
const url = require('url')
let win
app.on('ready', createWindow)
// Quit when all windows are closed.


function createWindow(){
  win = new BrowserWindow({width: 800, height: 600})
//  win.loadURL(path.join('file://',__dirname,'/index.html'))  // 절대 경로를 삽입함!

// Quit when all windows are closed.


win.loadURL(url.format({
  protocol: 'file',
  pathname: path.join(__dirname, 'index.html'),    // /index라 입력 안해도되용
  slashes: true
}))
//console.log(htmlURL)
//win.webContents.openDevTools()//웹브라우저 띄울시 자동으로 개발자 오픈

}  // 구글에 인덱스.에이치 티엠엘을 띄워서 그 어드레스를 저장
