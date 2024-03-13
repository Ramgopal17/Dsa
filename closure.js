// function x(){
//     var a=7
//     function y(){
// //         console.log(a)
//     }
//     y()
// }
// x()

// 

// let a=[100]
// let b=a
// console.log(a==b)

// let a=[100]
// let b=[100]

// console.log(a==b)


// function x(){
//     var a=7
//    return function y(){
//         console.log(a)
//     } 

// }


// var z=x()()
// console.log(z)


// function x(){
//     var a=7

//     function y(){
//         console.log(a)
//     }
//     var a=100
//     return y
// }

// var z=x()()

// console.log(z)
function z() {
    var b = 100

    function x() {
        var a = 7
        function y() {
            console.log(a, b)
        }
        y()
    }
    x()
}

z()

