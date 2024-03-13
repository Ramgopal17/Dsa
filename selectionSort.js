// function sort(arr){
//     for(let i=0;i<arr.length;i++){
       
//         last=arr.length-i-1
//         maxidx=getMaxIdx(arr,i,last)
//         swap(arr,maxidx,last)
//     }
//     return arr
// }

// function swap(arr,start,last){
//     temp=arr[start]
//     arr[start]=arr[last]
//     arr[last]=temp
// }
// function getMaxIdx(arr,start,last){
//     let max=start
//     for(i=start;i<=last;i++){
//         if(arr[max]<arr[i]){
//             max=i
//         }
//     }
// }
// let arr=[5,4,3,2,1]
// let a=sort(arr)
// console.log(a)

function sort(arr){
    for(i=0;i<arr.length;i++){
        let minId=i

        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minId]){
                minId=j
            }
        }
        let temp=arr[minId]
        arr[minId]=arr[i]
        arr[i]=temp
    }
    return arr
}
let arr=[5,4,3,2,1]
let a=sort(arr)
console.log(a)