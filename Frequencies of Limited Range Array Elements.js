let arr=[2, 3, 2, 3, 5]
let P=5
let map={}
let res=[]
for(i=1;i<=P;i++){
    res.push(i)
}
for(i of arr){
    map[i]=(map[i]||0)+1
  }
for(key in map){
    if(res.includes(key)==true)
}

console.log(res)