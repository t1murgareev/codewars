function vowelIndices(word){
    let s = ['a', 'e', 'i', 'o', 'u', 'y']
    let ar = []
    word = word.toLowerCase()
    for(let i = 0; i < word.length; ++i) {
        if (s.includes(word[i])) {
            ar.push(i+1)
        }
    }
    return ar
}

console.log(vowelIndices('supercalifragil'))