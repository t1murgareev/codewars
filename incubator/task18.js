function maskify(s) {
    let m = s.slice(s.length-4, s.length)
    let rep = (s.length - m.length) 
    let x = '#'.repeat(rep) + m
    if (s.length <= 4) {
        return s 
    }else {
       return x
    }
  
  }
  