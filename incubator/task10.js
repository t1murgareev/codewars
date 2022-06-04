function toCamelCase(s){
    let a = s.indexOf('-')
    let b = s.indexOf('_')
    let ar;
    if (a === -1) {
        ar = s.split('_')
    }else {
        ar = s.split('-')
    }
    let t = ""
    t+=ar[0]
    for(let i = 1; i < ar.length; i++) {
        t += ar[i][0].toUpperCase() + ar[i].slice(1)
    }

    return t

}