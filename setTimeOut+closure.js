// var i=1
// setTimeout( function(){
//     console.log(i)
// },3000);

// console.log("namaste javascript")

// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout( function (){
//             console.log(i)
//               },i*3000)
             
//             }
//             console.log("namste javascript")
//         }

// x()

// function  x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function (){
//             console.log(i)
//         },i*3000)
//     }
//     console.log("namste javascript")
// } 

// x()



function x(){
    for(var i=1;i<=5;i++){

        function close(x){
        setTimeout(function (){
            console.log(x)
        },x*2000)
    }
  
}
console.log("namaste javascript")
}
x()


//  gpood example of closure

function outer(){
    var a=10;
    function inner(){
        console.log(a)
    }
    return inner
}



var close=outer()
close()

