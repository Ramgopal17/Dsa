// // let data=[1,2,3,4,5]
// // let newEl=70
// // let position=2

// // // for(i=data.length-1;i>=0;i--){
// //     for(i=1;i<data.length;i++){
// //     if(i<=position){
// //         data[i+1]=data[i]
    
// //     if(i==position){
// //         data[i]=newEl
       
// //     }
// // }
// // } console.log(data)
// function sum(a,b){
//     return function inner(){
     
//       console.log(a)
//     }
//   }
  
//   const d=sum(2,3)
  
//   d()

// let arr=[1,2,3,4]


// for (let i=0;i<arr.length;i++){
 
//     arr[i+1]=arr[i]
//     arr[0]=-1
// } console.log(arr)

let a="123";
 let b=a.split("")
 let temp=[]
 for(i=b.length-1;i>=0;i--){
    temp.push(b[i])
 }
 
console.log(temp.join(""))
 