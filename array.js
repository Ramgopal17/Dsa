//  insert a element in array


// let data=[60,70,10,67,40,80]

// let newEle=110

// let pos=2
//  for(i=data.length-1;i>=0;i--){
//     if(i>pos){
//         data[i+1]=data[i]
     
//  }
//  if( i==pos){
//     data[i]= newEle
// }
//  }
// console.log(data)

// //  traverse and search a element
// arr=[20,40,30,50,60,45]
// let item=50
// let index=undefined
// for(i=0;i<arr.length;i++){
//     if(arr[i]==item){
//     index=i
//     break
//     }
// }

// console.log(index)

// delete a element 

let data=[30,20,10,45,76]
let pos=2
for(i=pos;i<data.length-1;i++){
    data[i]=data[i+1]
}
data.length--

console.log(data)

// merge a array 

// let arr1=[20,30,45,67,89,90]
// let arr2=[50,60,45,68,89]
// let temp=[]
// for(i=0;i<arr1.length;i++){
//     temp[i]=arr1[i]
// }
// for(i=0;i<arr2.length;i++){
//     temp[i+arr1.length]=arr2[i]
// }
// console.log(temp)

// array sorting  using bubble sort

// let arr=[20,30,56,45,45]
// let arr=[2,3,1,4]
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[j+1]>arr[j]){
//             temp=arr[j+1]
//             arr[j+1]=arr[j]
//             arr[j]=temp
//         }
//     }
// }

// console.log(arr)




// let arr=[2,3,45,6,8]
//       let large=0       
//    let count=0
//   for(let i=0;i<arr.length;i++){
 
//          if(arr[i]>large){      
//          large=arr[i]
//          count++
//         }
//   }
// console.log(large,count)


// const string ="ADITYA"
// const array=[...string]
// console.log(array)


// empty an array in one line

// a=[1,2,3,4,4]
// a.length=0
// console.log(a)

// linear search 

// let p=[20,30,56,45,45]
// let find=45
// for(i=0;i<arr.length;i++){
// if(p[i]==find){
//     console.log(i)
// }

//     }
// insert a element in array

// let data=[60,30,45,30,87]

// let pos=3
// let newEle=70

// for(i=data.length-1;i>=0;i--){

//     if(i>=pos){
//         data[i+1]=data[i]
//     }
//     if(i==pos){
      
//         data[pos]=newEle
      
//     }
    
// }
// console.log(data)

// delete element in array
// let data=[30,20,45,76,20]
// let pos=2
// for(i=pos;i<=data.length-1;i++){
//     data[i]=data[i+1]
// }
// data.length=data.length-1
// console.log(data)

// merge array
// let data1=[3,7,12,34,56,90]
// let data2=[8,4,95,6,78,23,]
// let data3=[]
// for(i=0;i<data1.length;i++){
//     data3[i]=data1[i]
// }

// for(i=0;i<data2.length;i++){
//     data3[data1.lenght+i]=data2[i]
// }
// console.log(data3)

