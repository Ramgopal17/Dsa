arr1 = [1, 5, 10, 20, 40, 80]
arr2 = [6, 7, 20, 80, 100]
arr3 = [3, 4, 15, 20, 30, 70, 80, 120]
let map1={}
for(i of arr1){
    map1[i]=(map1[i]||0)+1
}
console.log(map1)

let map2={}
for(i of arr2){
    map2[i]=(map2[i]||0)+1
}
let res=[]
for( j of arr3){
    if(map1[j] && map2[j]){
        res.push(j)
    }
}

console.log(res)