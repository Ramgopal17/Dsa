let str="cheese"
function replaceStr(str){
let map={}
for(i of str){
map[i]=(map[i]||0)+1
}
let max=-Infinity
for(key in map){
max=Math.max(max,map[key])

}
return str.length-max
}

let a= replaceStr(str)
console.log(a);