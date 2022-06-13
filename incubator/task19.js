function inArray(a1,a2){
    let ar = new Set()
    for(let i = 0; i < a2.length; i++) {
        for(let j = 0; j < a1.length; j++) {
            if (a2[i].includes(a1[j])) {
                ar.add(a1[j])
            }
        }
    }

    let ms = []
    for(w of ar) {
        ms.push(w)
    }

    ms.sort()
    return ms
}