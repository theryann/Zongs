const remote  = require('@electron/remote');
const { ipcRenderer } = require('electron')
const { dialog } = remote;


// const openBtn = document.querySelector('button')
// openBtn.onclick = async () => {
//     const { filePath } = await dialog.showSaveDialog()
//     console.log(filePath)
// }

let configFilePath = path.join(app.getPath('userData'), 'config.json');
console.log(fs.readFileSync(configFilePath))