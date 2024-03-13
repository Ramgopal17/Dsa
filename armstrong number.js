let num="163"
let temp=num
function isArmstrong(num){
let res=[]

while(num>0){
  let  a=num%10
res.push(a)
    num=Math.floor(num/10)
}

sum=0
for(i=0;i<res.length;i++){
    sum+=Math.pow(res[i],3)

}

if(sum==temp){
    return "Yes"
}else{
    return "No"
}
}
let a=isArmstrong(num)
console.log(a)