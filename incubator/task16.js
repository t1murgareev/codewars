function isCoprime(a, b) {
    let x = new Set()
    let ctr = 0
    for(let i = 2; i <= a; i++) {
        if (a%i===0) {
            x.add(i)
        }
    }

    for(let i = 2; i <= b; i++) {
        if (b%i===0) {
            ctr+=x.has(i)
        }
    }

    if (ctr === 0) {
        return true
    }else {
        return false
    }
}