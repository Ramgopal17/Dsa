
let num=123
function reverseDigits(num) {
    let res = 0;
    while(num > 0)
    {

        let c= num % 10;
        res = res * 10 +c
        num = Math.floor(num / 10);
    }
    return res;
}

let a=reverseDigits(num)
console.log(a);