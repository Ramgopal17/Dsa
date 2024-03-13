// let arr=[0,1,1,1,1,0,0,1,0]

// function Move(arr){
//     let i=0
//     let j=0
//     while(j<arr.length){
//         if(arr[j]>0){
//             j++
//         }
//         else{
//             temp=arr[j]
//             arr[j]=arr[i]
//             arr[i]=temp
//             i++
//             j++
//         }
//     }
//     return arr
// }

// let a=Move(arr)
// console.log(a)

//sort color
arr=[0,0,1,2,2,2,2,1,1,0,0,0,0,1,1,1]
function sortColor(arr){
    let l=0
    let mid=0
    r=arr.length-1
    while(mid<r){
        if(arr[mid]==0){
            temp=arr[mid]
            arr[mid]=arr[l]
            arr[l]=temp
            l++
            mid++

        }else if( arr[mid]==1){
            mid++
        }else if(arr[mid]==2){
            temp=arr[mid]
            arr[mid]=arr[r]
            arr[r]=temp
            r--
        }
    }
    return arr
}

let a=sortColor(arr)
console.log(a)