var beeramid = function(bonus, price) {
    let exp = bonus / price
    let ctr = 0
    let sum = 0
    for(let i = 1; i <= 650; i++) {
        if (sum <= exp) {
            ctr++
        }else {
            break
        }
        sum += Math.pow(i, 2)
    }
    if (bonus === price) {
        return 1
    }else if (bonus < price) {
        return 0
    }else {
        return ctr-1
    }
}

console.log(beeramid(9, 2)) //1);
console.log(beeramid(10, 2)) // 2);