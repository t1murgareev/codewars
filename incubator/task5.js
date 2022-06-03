function pigIt(x){
    let xMas = ""
    let mas = x.split(' ')
    let result = ''
    for(let i = 0; i < mas.length; i++) {
        if (mas[i].indexOf("!") === 0 || mas[i].indexOf("?") === 0) {
            xMas += mas[i]
            continue
        }else {
            let w = mas[i][0]
            let change = mas[i].substring(1) + w + "ay"
            result += change + ' '
        }

    }
    let t = result + xMas
    let finish = t.trimEnd()
    return finish
}

console.log(pigIt('Pig latin is cool'))