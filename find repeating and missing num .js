let arr=[1,3,3]
let map=[]
for( i of arr){
map[i]=(map[i]||0)+1
}
let res=[]
for( key in map){
res.push(key)
}

max=Math.max(...res)

let a=max*(max+1)/2
let sum=0
for(i=0;i<res.length;i++){
  sum+=parseInt(res[i])
}

let c=a-sum
console.log(c)