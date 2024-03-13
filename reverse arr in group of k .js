 let arr=[1,2,3,4,5,6,7,8,9,10]
 function reverse(arr,l,r){
    while(l<r){
        let temp=arr[l]
        arr[l]=arr[r]
        arr[r]=temp
        l++
        r--
    }
    return arr
 }

 function groupOfK(arr,k){
  
    for(i=0;i<arr.length;i+=k){
    s=i
    e=Math.min(i+k-1,arr.length-1)
   
        reverse(arr,s,e)
        s++
        e--


 }
 return arr
}

 let a=groupOfK(arr,3)
 console.log(a)