
function openUrl(url: string): void {
    var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open')
    require('child_process').exec(start + ' ' + url)
}

openUrl(`https://thispersondoesnotexist.com/`)
