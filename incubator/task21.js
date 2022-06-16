function expandedForm(n) {
    let s = String(n)
    let x = s.length-1
    let r = ""
    for(let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            x--
            continue
        }

        if (s[i]!=='0') {
            let w = parseInt(s[i]*Math.pow(10, x))
            r += String(w)+" + "
            x--
        }
    }
    r.trim()
    r = r.substring(0, r.length-2)
    return r.trim()
}