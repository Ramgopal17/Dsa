
// console.log(a)
// //  temporal dead zone
// let a=10
// ReferenceError: Cannot access 'a' before initialization
// console.log(b)  
// var b=15
// // undefined

// console.log(x)
// // ReferenceError: x is not defined
 
// let a=10
// var a=100

// SyntaxError: Identifier 'a' has already been declared

// var b=10;
// var b=100
// console.log(b)

// // 100



var a=100;
{
    var a=10
    let b=20
    let c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)