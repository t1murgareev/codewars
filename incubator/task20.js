function alienLanguage(str){
    let res = str.toUpperCase()
    let ar = res.split(' ')
    let line = ''
    for(let i = 0; i < ar.length; i++) {
        line += ar[i].substring(0, ar[i].length - 1) + ar[i][ar[i].length-1].toLowerCase()+' '
    }
    return line.trim()

}

console.log(alienLanguage("Hello World"))
