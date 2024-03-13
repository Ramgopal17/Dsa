let arr1=[10,10,10,20,20,30,30,30,30,50]
let  arr2=[100,100,100,400,400,900,900,900,2500]
function x(arr1,arr2){
let map1={}
let map2={}
for(i of arr1){
    map1[i]=(map1[i]||0)+1
}
for(i of arr2){
    map2[i]=(map2[i]||0)+1
}


for(keys in map1){
   if( map2[keys*keys]!=map1[keys]){
    return false
   }
   return true
}
}

let s=x(arr1,arr2)

console.log(s)