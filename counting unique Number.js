let a=[1,1,2,2,3,4,4,5,6,7,8,8]
// output=>8

function unique(a){
    if(a.length>0){
    let i=0
    for(j=1;j<a.length;j++)
    if(a[i]!=a[j]){
        i++
        a[i]=a[j]
        
    }
    return i+1
}else{
    console.log("array is empty")
}

}


let b=unique(a)
console.log(b)

// function unique(arr){
//     let map={}
//     for(i of arr){
//         map[i]=(map[i]||0)+1
//     }
//     let cnt=0
//     for(key in map){
//       cnt++
//     }
//     return cnt
// }

// let d=unique(arr)
// console.log(d)