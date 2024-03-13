let str="aaabbcccc"
let arr=str.split("")
let max=-Infinity
let map={}
let ans;
for(let  i of arr){
    map[i]=(map[i]||0)+1
    if(map[i]>max){
        max=map[i]
        ans=i
    }
}
let smax=0
for( key in map){
    if(map[key]==max){
        continue
        
    }
    if(map[key]>smax){
        smax=map[key]
        char =key
    }


}
console.log(char);




