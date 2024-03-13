let arr=[5,4,3,2,1]

function sort(arr){
    for(i=0;i<arr.length;i++){
        let swap=false
        for(j=1;j<arr.length-i;j++){
            if(arr[j-1]>arr[j]){
                temp=arr[j-1]
                arr[j-1]=arr[j]
                arr[j]=temp
              swap=true
            }

        }
        if(swap==false){
            break;
        }

    }
    return arr
}

let a=sort(arr)
console.log(a);