// let  userDetails={
//     name:"ram",
//     "age":"25",
//     "designation":"sde",
//     printDetails:function(){
//         console.log(this.name)
//     }

// }

// userDetails.printDetails()

// let  userDetails2={
//     name:"gopal",
//     "age":"26",
//     "designation":"sde",
//     printDetails:function(){
//         console.log(this.name)
//     }

// }



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Akshay saini video @@@@@@@@@@@@@@@@@@@@

// let name={
//     firstname:"Akshay",
//     lastname:"saini",
//     printFullName:function(){
//         console.log(this.firstname+" "+this.lastname)
//     }
// }
// name.printFullName()


// let name2={
//     firstname:"Ram",
//     lastname:"gopal"
// }


// // // function borrowing
// name.printFullName.call(name2)

// let name={
//     firstname:"Akshay",
//     lastname:"saini",
  
// }
// let  printFullName=function(){
//         console.log(this.firstname+" "+this.lastname)
//     }

// let name2={
//     firstname:"Ram",
//     lastname:"gopal"
// }


// printFullName.call(name2)



let name={
    firstname:"Akshay",
    lastname:"saini",
  
}
let  printFullName=function(homeTown,state){
        console.log(this.firstname+" "+this.lastname+"  from  "+homeTown,"",state)
    }

let name2={
    firstname:"Ram",
    lastname:"gopal"
}


printFullName.call(name2,"mumbai","maharastra")

printFullName.apply(name2,["mumbai","maharastra"])

// bind method

let printMyName=printFullName.bind(name2,"mumbai","Maharastra")
console.log(printMyName)

printMyName()