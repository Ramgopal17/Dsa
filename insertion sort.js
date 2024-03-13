let arr=[5,4,3,2,1]
function sort(arr){
    for(j=1;j<arr.length;j++){
        curr=j
        while(arr[curr-1]>arr[curr] &&j>=1){
            [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]]
            curr--


        }
     
    }
    return arr
}

let a=sort(arr)
console.log(a);