var findMissing = function (mas) {
    let d = mas[1] - mas[0]
    let t = 0
    for(let i = 0; i < mas.length; i++) {
        if ((mas[i]+d) != mas[i+1]) {
            t = mas[i+1]
            break
        }
    }
    return t - d
}