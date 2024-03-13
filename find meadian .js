function find_median(arr){
    arr.sort((a,b)=>a-b)
       let x=Math.floor(arr.length/2)
    if(arr.length%2!=0){
     
        return arr[x]
        
    }else{
        console.log(x)
        let a=Math.floor((arr[x-1] +arr[x])/2)
        
        return a
    }
   }
// let arr=[ 90,100,78,89,67]

let arr=[56,67,30,79]
   let a=find_median(arr)
   console.log(a);