function insertionSort(arr){
    for(let right=1;right<arr.length;right++){
        let curr=right
        while(curr>=1 && arr[curr-1]>arr[curr]){
            [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]]
            curr--
        }
    }
    return arr
}
let arr=[3,2,5,1,6,3]
let a=insertionSort(arr)
console.log(a)