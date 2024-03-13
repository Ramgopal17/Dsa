N = 78

let arr=[5,20,3,2,5,80]
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[j]-arr[i]==N){
//             console.log(arr[i],arr[j])
//         }
//     }
// }

// optimize way to solve it
let map={}
for(i of arr){
    map[i]=(map[i]||0)+1
}
for(i=0;i<arr.length;i++){
    curr=N+arr[i]
    if(map[curr]){
        console.log(curr,arr[i])
    }

}