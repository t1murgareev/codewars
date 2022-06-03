function isValidIP(s) {
    let a = s[0]
    let b = s[s.length-1]
    let total = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i-1] === '.' && s[i] === '.') {
            total +=1
        }
    }
    if (a === '.' || b === '.' || total === 1) {
        return false
    }
    let mas = s.split(".")
    let ar = []
    let ctr = 0
    let count = 0
    for(let i = 0; i < mas.length; i++) {
        if (mas[i][0] === '0' && mas[i].length >= 2) {
            ctr+=1
        }
    }
    if (ctr > 0 || s.includes('\\n') || s.includes('e')) {
        return false
    }else {
        for(let i = 0; i < mas.length; i++) {
            ar.push(mas[i] - 0)
            if(0<=ar[i] && ar[i] <= 255) {
                count+=1
            }
        }
    }
    return ar

}

let a = ".69.110.23"

console.log(isValidIP(a))

















