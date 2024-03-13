let arr=[4,3,7,5,4,9,5,3]
function duplicate(arr){


let map={}
for(i of arr){
    map[i]=(map[i]||0)+1

}
let res=[]
for(key in map){
    if(map[key]>1){
        res.push(key)
    }
  
 
}
return res
}
let a=duplicate(arr)
console.log(a)