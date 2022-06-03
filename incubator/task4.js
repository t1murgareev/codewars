function narcissistic(value) {
    let num = value
    let b = String(value)
    let x = b.length
    let sum = 0
    let r = 0
    while (num!==0) {
        r = parseInt(num % 10)
        sum += Math.pow(r, x)
        num = parseInt(num / 10)
    }
    if (sum === value || x === 1) {
        return true
    }else {
        return false
    }
}

console.log(narcissistic( 371 ))