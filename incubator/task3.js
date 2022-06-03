function maxMultiple(divisor, bound){
    let ar = []
    for(let i = 1; i <= bound; i++) {
        if (i%divisor === 0) {
            ar.push(i)
        }
    }
    return Math.max(...ar)
}