
// // array sorting  using bubble sort

// let arr=[20,30,56,45,45]
// let arr=[2,3,1,4]

let arr=[1,2,3,8,4,5,6,7]
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j+1]<arr[j]){
            temp=arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr);

// function bubbleSort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j+1]>arr[j])
//             [arr[j]],[arr[j+1]]=[arr[j+1]],[arr[j]]
//         }

//     }
//     return arr
// }
// let arr=[2,3,1,4]
// let a=bubbleSort(arr)
// console.log(a);