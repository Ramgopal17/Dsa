//  filter out duplicate and find out unique


// let arr=[1,1,2,22,3,5,11,2]
// function unique(arr){
//     let mp=new Map()
//     for(let i=0;i<arr.length;i++){
//         if(mp.has(arr[i])){
//             mp.set(arr[i],mp.get(arr[i])+1)
//         }else{
//             mp.set(arr[i],1)
//         }

//     }
//     let result=[]
//     for( i of mp){
//         if(i[1]==1){
//             result.push(i[0])
//         }
//     }
//     return result
// }

// let a=unique(arr)
// console.log(a)

// let arr = [7, 2, 4, 6, 9, 11, 34, 3, 2, 1]
// function uniquePair(arr, k) {

//     let  s = new Set()
//     for (i = 0; i < arr.length; i++) {
//         temp=k-arr[i]
//         if (s.has(temp)) {
//             console.log([arr[i],temp])
//         } else {
//             s.add(arr[i])
//         }
//     }
// }

// uniquePair(arr, 5)

// check whether input is integer or not

// function input(a) {
//     let isInput = true
//     for (i = 0; i < a.length; i++) {

//         if (a[i] >= "0" && a[i] <= "9") {
//            continue
//         } else {
//             isInput=false
//     break
//         }
//     }
//     return isInput
// }

// let c = input("12345688")
// console.log(c)


// let arr = [1, -2, 3, 8, 7]
// function sum(arr) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = 1; j < arr.length; j++) {
//             if(arr[i]+arr[j]!=6){
//                 return 0
//             }
    
//             }
//             return 1
//         }
//     }


// let a = sum(arr)
// console.log(a)

// foo and bar problem function 

// function problem(num){
//     if(num%3==0){
//         return "foo"
//     }else if(num%5==0 ){
//         return "bar"
//     }else if(num%5==0 && num%7==0){
//         return "fooobar"
//     }else{
//         return "nothing"
//     }
// }
// num=31
// let a=problem(num)
// console.log(a)


// check number is integer or not

str="12345"
function isInteger(str){
arr=str.split(" ")
let Regx=/^-?[0-9]+$/
for(i of arr){
if(Regx.test(i)){
    return "true"
}else{
    return "false"
}
}
}
let a=isInteger(str)
console.log(a);