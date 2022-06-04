function highestRank(ar){
    let ls = 0
    let ctr = 0
    let max = 1
    for(let i = 0; i < ar.length; i++) {
        for(let j = i+1; j < ar.length; j++) {
            if(ar[j] === ar[i] && i != j) {
                ctr++
                if(ctr > max) {
                    ls = ar[j]
                    max = ctr
                }
            }else {

                ctr = 1
            }
        }
    }
    return ls
}