let str = "aabacbebebe"
let k = 3
function longestSubstring(str, k) {
    let i = 0
    let max = 0
    let mp= new Map()

  for(let j=0;j<str.length;j++){
  if(mp.has(str[j])){
    mp.set(str[j],mp.get(str[j])+1)
  }else{
    mp.set(str[j],1)
  }
  while(mp.size>k){
    let lc=str[i]
    if(mp.get(lc)>1){
        mp.set(lc,mp.get(lc)-1)
    }
        mp.delete(lc)
        i+=1
    
  }
max=Math.max(max,j-i+1)
}
return max
}


let a = longestSubstring(str, 2)
console.log(a);