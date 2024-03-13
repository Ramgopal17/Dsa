let  arr = [[1,2,3],[3,2,1]]
function richest(arr){
    let max=-Infinity

for(i=0;i<arr.length;i++){
    let sum=0
    for(j=0;j<arr[i].length;j++){
        sum+=arr[i][j]
        if(sum>max){
            max=sum
        }

    }
}
return max
}
let a=richest(arr)
console.log(a)