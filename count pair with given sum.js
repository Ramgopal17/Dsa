// function countPair(arr,n,k){
//     let mp=new Map()
//     let count=0
//     for(i=0;i<n;i++){
//         if(mp.has(arr[i])){
//             mp.set(arr[i],mp.get(arr[i])+1)
//         }else{
//             mp.set(arr[i],1)
//         }
//     }
    
// for(let i=0;i<n;i++){
// let x=k-arr[i]
// if(mp.get(x)!=null){
//     count+=mp.get(x)
// }

// if(k-arr[i]==arr[i]){
//     count--
// }

// }
// return count/2
// }
// let arr=[1,5,7,1]
// let a=countPair(arr,4,6)
// console.log(a)



let twoSum = (array, sum) => {
    let hashMap = {},
      results = []
let count=0
        for (let i = 0; i < array.length; i++){
            if (hashMap[array[i]]){
                results.push([hashMap[array[i]], array[i]])
                count++
            }else{
                hashMap[sum - array[i]] = array[i];
            }
          }
          return count
    }
let arr=[2,4,1,3,5]
    let a=twoSum(arr,6)

    console.log(a)