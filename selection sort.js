let arr=[5,4,3,2,1]
 function sort(arr){
    for(i=0;i<arr.length;i++){
        minIdx=i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIdx]){
                temp=arr[minIdx]
                arr[minIdx]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
 }

 let a=sort(arr)
 console.log(a)