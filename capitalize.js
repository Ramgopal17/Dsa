// let arr=[20,15,13,25,37,48]
// min=Infinity
// for(i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i]
//         let b= arr.indexOf(min)
//         arr                                                                                                                                                      .splice(b,1)
//     }
  
// }

// console.log(arr)


let arr=["hi","hello","world"]
// function capital(arr,index){
//     if(index<arr.length){
//     arr[index]=arr[index][0].toUpperCase()+arr[index].slice(1)

//      capital(arr,index+1)
//     }
//     return arr
// }

// let a=capital(arr,0)
// console.log(a)


function capitalise(arr){
    if(arr.length==0){
        return []
    }
    let result=[]
    let s=arr[0][0].toUpperCase()+arr[0].slice(1)
    result.push(s)
     return result.concat(capitalise(arr.slice(1)))
}

let a=capitalise(arr)
console.log(a)