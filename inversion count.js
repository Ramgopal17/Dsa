arr = [1, 20, 6, 4, 5];
function inversion(arr){
    let count=0
    for(let i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                count++
            }
        }
    }
    return count
}

let a=inversion(arr)
console.log(a)