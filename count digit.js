let num="12"
let temp=num
let count=0
while(num>0){

    a=num%10
   
    num=Math.floor(num/10)

    if(temp%a==0){
        count++
       }
}
console.log(count);