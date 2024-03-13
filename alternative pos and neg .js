let arr=[3,1,-2,-5,2,-1]

function alternate(arr){
    let posIdx=0
    let negIdx=1
    let res=new Array(arr.length).fill(0)
    for(i=0;i<arr.length;i++){
        if(arr[i]>0){
            res[posIdx]=arr[i]
            posIdx+=2
        }
    if(arr[i]<0){
        res[negIdx]=arr[i]
        negIdx+=2
    }

    }
    return res
}

let a=alternate(arr)
console.log(a)

//  another way of solving it 


// let arr=[2,-1,2,3,4,-3,-4,-5,3,4]

// function alt(arr){
//     let res=[]
//     for(i=0;i<arr.length;i++){
//         if(i%2==0){
//             res.push(Math.abs(arr[i]))
//         }else{
//             res.push(-Math.abs(arr[i]))
//         }
//     }
//     return res
// }

// let a=alt(arr)
// console.log(a)