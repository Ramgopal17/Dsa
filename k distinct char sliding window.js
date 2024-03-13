let nums="eceba"
let i=0
let k=2
let max=0
let map={}
for(j=0;j<nums.length;j++){
if(map[nums[j]]!=undefined && map[nums[j]]>=0){
    map[nums[j]]+=1
}else{
   map[nums[j]]=1
}

while(Object.keys(map).length>k){
    let lc=nums[i]
    if(map[lc]>1){
        map[lc]-=1
    }else{
        delete map[lc]
      
    }
    i++
}
      max=Math.max(max,j-i+1)
}

console.log(max);