let arr=[2,14,18,22,18,18]
function duplicate(arr){
let mp=new Map()

for(i=0;i<arr.length;i++){
    if(mp.has(arr[i])){
        mp.set(arr[i],mp.get(arr[i])+1)
    }else{
        mp.set(arr[i],1)
    }
}
let res=[]
for( i of mp){
    res.push(i[1])
   
}
for( k in res){
    if(res[k]>=2){
        return true

}

}
return false
}

let a=duplicate(arr)
console.log(a)