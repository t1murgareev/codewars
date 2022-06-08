function matrixAddition(a, b){
    let ar = []
    for(let i = 0; i < a.length; i++) {
       let ls = []
       for(let j = 0; j < a[i].length; j++) {
          ls.push(a[i][j] + b[i][j])
       }
      ar.push(ls)
    }
   return ar
 }