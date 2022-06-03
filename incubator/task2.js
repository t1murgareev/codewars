function calculator(a,b,sign){
    if (Number.isInteger(a) && Number.isInteger(b)) {
        switch(sign) {
            case '+':
                return a + b;
                break;
            case '-':
                return a - b;
                break;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return "unknown value";
        }
    }else {
        return "unknown value"
    }

}

let a = 6
let b = 2
let s = '&&'
console.log(calculator(a,b,s))