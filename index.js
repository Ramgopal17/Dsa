// actors = [
//     {
//         name: "actor1",
//         payment: 100
//     }, {
//         name: "actor2",
//         payment: 150
//     }, {
//         name: "actor3",
//         payment: 200
//     }
// ]
// ----------------------------------------------------------normal for loop------------------------------------
// for(let i=0;i<actors.length;i++){
//     // actors.payment=actors.payment-10
//     actors[i].payment=actors[i].payment-10
// }
// console.log(actors)
// ----------------------------------------------------------for each---------------------------------------
// actors.forEach((x)=>{
//     x.payment= x.payment-10
// })
// console.log(actors)
// --------------------------------------------------------for of-------------------------------------

// for(let i of actors){
//     i.payment=i.payment-10

// }
// console.log(actors)

// --------------------------------------filter---------------------------------------------------------------


// const students = [{
//     name: "st1",
//     marks: 45
// },
// {
//     name: "st2",
//     marks: 65

// },
// {
//     name: "st1",
//     marks: 75
// }]

// let a= students.filter((student)=>{
// if(student.marks<44){
//     return true
// }
// return false
// })
// console.log(a)

// -----------------------------------------------another way of filter--------------------------------------------------------


// let a= students.filter((student)=>
//       {
//        return  student.marks>44
 
//     })
//     console.log(a)

// ---------------------------------------------------map----------------------------------------------------


// const users=[{fname:"john",

//             lname:"doe"},
//             {
//                 fname:"jane",

//             lname:"doe"
//             }
        
        
//         ]

//  let a=users.map((user)=>{
//     return fullName=user.fname +" "+user.lname

//  })       
//  console.log(a)

//  ------------------------------------for each and reduce-----------------------------------------------------

// const movies=[{name:"intersteller",budget:100},
//               {name:"social",budget:150},
//                {name:"Matrix",budget:200}]


//        let total=0        
//     const a=movies.forEach((movie)=>{
//         total=total+movie.budget
//     })     
    
//     console.log(total)


//    let a= movies.reduce((total,movie)=>{
//         total=total+movie.budget
//         return total
//     },0)

//     console.log(a)

// -------------------------------------------------IndexOf------------------------------------------------------

// const admin=[2,1,5]
// const user={
//     name:"xyz",
//     id:6
// }
// let isAdmin=admin.indexOf(user.id)>-1
// console.log(isAdmin)

// ------------------------------------includes  in place of Indexof--------------------------------------------

// // let d=admin.includes(user.id)
// // console.log(d)

// // -----------------------------------------find-------------------------------------------------------------------------
// const user1=[{
//     name:"xyz",
//     id:1
// },
// {
//     name:"pqr",
//     id:2
// },
// {
//     name:"abc",
//     id:3
// }]


// let a= user1.find((user)=>{
//     if(user.id===3){
//         return true
//     }
//     return false
// })

// console.log(a)


// arr=[1,1,2]
// let set=new Set()
// for(i in arr){
//     for(j in arr){
//       set.add(`${arr[i]} ${arr[j]}`)
// }
 
// } console.log(set.size)


// for(i=0;i<arr.length;i++){
//     if(i==0) arr[0]=-1
    
// }


// const myNum = 5
// a=myNum.toString(2)
// arr=a.split("")

// for(let i=0;i<arr.length;i++){
    

// if(arr[i]===1){
 
//     arr.splice(i,arr.length,0);
// }else if(arr[i]===0){
//     arr.splice(i,arr.length,1);
  
// }
// console.log(arr)

// }

function sum(){
    sum()
}
