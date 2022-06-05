function last(a){
    let b = a.split(' ')
    for(let i = 0; i < b.length-1; i++) {
        for(let j = 0; j < b.length-i-1; j++) {
            if (b[j].slice(-1) > b[j+1].slice(-1)) {
                [b[j], b[j+1]] = [b[j+1], b[j]]
            }
        }
    }
    return b
}

console.log(last('man i need a taxi up to ubud'))