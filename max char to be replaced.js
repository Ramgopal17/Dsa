let str="cheese"
let arr=str.split("")

// let map=new Map()
// for(i of arr){
   
//     if(map.has(i)){
//         map.set(i,map.get(i)+1)
//     }else{
//         map.set(i,1)
//     }
    
// }
// console.log(map)

let map={}
for(i of arr){
    map[i]=(map[i]||0)+1
}
let max=-Infinity
for(key in map){
    if(map[key]>max){
        max=map[key]
    }
}
console.log(str.length-max);