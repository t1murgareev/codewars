function createPhoneNumber(ar){
    let x = String(ar.slice(0,3))
    x = x.replace(/,/g,'')
    let w = String(ar.slice(3,6))
    w = w.replace(/,/g,'')
    let q = String(ar.slice(6))
    q = q.replace(/,/g,'')
    let s = '(' + x + ') '
    return s + w + '-' + q

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))