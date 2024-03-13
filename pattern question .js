// let n=5

// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write("*"+" ")
//     }
//     process.stdout.write("\n")
// }

// * 
// * * 
// * * * 
// * * * * 
// * * * * *

// for(i=1;i<7;i++){
//     for(j=1;j<5;j++){
//         process.stdout.write("*"+" ")
//     }
//     process.stdout.write("\n")
// }

// for(i=5;i>=1;i--){
//     for(j=1;j<=i;j++){
//         process.stdout.write("*"+" ")
//     }
//     process.stdout.write("\n")
// }

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 


// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write(j+" ")
//     }
//     process.stdout.write("\n")           
// // }
// let n=4
// for(i=0;i<2*n;i++){
//   c=i>n?2*n-i:i

//     for(j=0;j<c;j++){
//   process.stdout.write("*"+" ")
//     }
//     process.stdout.write("\n")
// }
// 1
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5

// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write(i+" ")
//     }
//     process.stdout.write("\n")
// }


// for(i=5;i>=0;i--){
//     for(j=1;j<=i;j++){
//         process.stdout.write(i+" ")
//     }
//     process.stdout.write("\n")
// }
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 



for(i=5;i>=0;i--){
    for(j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode("A".charCodeAt(0)-1+i)+" ")
    }
    process.stdout.write("\n")
}

// A B C D E 
// A B C D 
// A B C 
// A B 
// A 