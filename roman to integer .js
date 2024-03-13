var romanToInt = function(s) {
    let map={
"I":1,
"V":5,
"X":10,
"L":50,
"C":100,
"D":500,
"M" :1000}

let res=0
for(i=0;i<s.length;i+=1){
let curr=map[s[i]]
let next=map[s[i+1]]

if(curr<next){
    res+=next-curr
 i++
}else{
    res+=curr
  
}
}  
return res  
};

let a=romanToInt("III")
console.log(a)