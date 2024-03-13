let arr=[10, 19, 6, 3, 5]
function swap(arr){
    let c=0
    for(i=0;i<arr.length-1;i++){
        let swap=false
        for(j=i+1;j<arr.length-2;j++){
            if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            c++
            swap=true
        }
        if(swap==false){
            break;
        }
    }
    return c
}
   
}
console.log(swap(arr))