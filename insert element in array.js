let arr=[60,70,10,67,40,80]

let newEle=110
let pos=2

for(i=arr.length-1;i>=0;i--){
 
    if(i>=pos){
        arr[i+1]=arr[i]
        if(i==pos){
            arr[i]=newEle
        }
    }
    
}
console.log(arr);