// It is a technique in functional programming, transformation of the 
// function of multiple arguments into several functions of a single 
// argument in sequence. It is also called nested function is ecmascript

// function calculateVolume(length, breadth, height) {
//     return length * breadth * height;
// }
// //With Currying
// function calculateVolume(length) {
//     return function (breadth) {
//         return function (height) {
//             return length * breadth * height;
//         }
//     }
// }


//  Currying :
//- Currying is an advanced technique of working with functions.
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         console.log("sum is:::", a + b + c + d);
//       };
//     };
//   };
// }
// sum(5)(7)(3)(20);