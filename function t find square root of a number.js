function sqroot(arr,target){
    let s=0
    let e=arr.length-1
    while(s<e){
        let mid=s+Math.floor((e-s)/2)
   if(mid*mid<target){
    s=mid+1
   }else{
    e=mid-1
   }
       
    }
    return s
}
let arr=[1,2,3,4,5,6,7,8]

let a=sqroot(arr,18)
console.log(a)