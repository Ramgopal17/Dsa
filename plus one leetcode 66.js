var digits=[4,2,3,1]

function plusOne(digits){

for(i=digits.length-1;i>=0;i--){
    if(digits[i]<9){
        digits[i]++
        return digits
    }else {
        digits[i]=0
    }
}
digits.push(0)
digits[0]=1
}

let a=plusOne(digits)
console.log(a)