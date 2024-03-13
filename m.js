
// let arr=[1,2,5,2,2,5]
// let map={}
// for( i of arr){
//     map[i]=(map[i]||0)+1
// }
// for(key in map){
// if(arr[key]!=null){
//     arr[i]=map[key]
// }
// }
// console.log(arr);

// let arr=[1,1,2,2,3]

// // let arr=[5,44,3,2,1,1]
// let map={}
// for( i of arr){
//     map[i]=(map[i]||0)+1
// }
// let map1={}
// let a=Object.values(map)
// for(j of a){
//     map1[j]=(map1[j]||0)+1
// }
// for(item of  Object.keys(map1)){
//    if(map1[item]==1){
//     break
//    }

// }
// for(key of Object.keys(map)){
//    if(map[key]==item){
//     break
//    }

// }
// console.log(key)


//  find min number

// let arr=[6,7,1,2,40,58,0,5,2]
// let max=-Infinity
// let min=Infinity
// for(let i=0;i<arr.length;i++){
// if(arr[i]>max){
//     max=arr[i]
// }

// if(arr[i]<min){
//     min=arr[i]
// }
// }
// console.log(min)
// // console.log(max);

// search in 2d Array


let arr = [
[1, 3, 4, 5],
[15, 7, 8, 3],
[7, 5, 6, 9],
[5, 7, 8, 3]]
function search(arr){
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]==15){
            return (i,j)
        }else if(arr[i][j]>15){
            return (i,j)
            i++
        }else{
            return (i,j)
            j++
        }
      }
}}

let a=search(arr)
console.log(a)

// nums = [12,345,2,6,7896]
// let m=[]
// for(i=0;i<nums.length;i++){
//    m.push(nums[i].toString().length)
// }
// let count=0
// for(j=0;j<m.length;j++){
//     if(m[i]==0){
//         return -1
//     }
//     if(m[i]<0){
//         m[i]=m[i]*-1
//     }
//     if(m[j]%2==0){
//         count+=1
//     }

// }
// console.log(count)
// richet wealth problem leetcode 1672
// let  acc = [[1,2,3],[3,2,1]]
// let max=-Infinity
// for(i=0;i<acc.length;i++){
//     let sum=0
   
//     for(j=0;j<acc[i].length;j++){
//         sum=sum+acc[i][j]
//         if(sum>max)
//         max=sum
//     }
   
// } 
// console.log(max)


