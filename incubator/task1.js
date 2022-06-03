function spinWords(w){
    let mas = w.split(' ');
    for (let i = 0; i < mas.length; i+=1) {
        if (mas[i].length >= 5) {
            mas[i] = mas[i].split('').reverse().join('');
        }
    }
    return mas.join(" ")
}

console.log(spinWords("Mark Downssss"))