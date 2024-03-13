let arr=[1, 4, 45, 6, 10, 8];
let sum = 22;
function triplet(arr,sum){
let s=new Set()
for(i=0;i<arr.length;i++){
    curr=sum-arr[i]
    for(j=i+1;j<arr.length;j++){
        if(s.has(sum-arr[j])){
            console.log(arr[i],arr[j],(sum-arr[j]))

       
        }else{
            s.add(arr[j])
        }
    }

}
return -1
}
let a=triplet(arr,sum)
console.log(a)