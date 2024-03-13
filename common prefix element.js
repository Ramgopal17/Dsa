let arr=["flower","flow","fly"]

function common(arr){
    let ans=""
    for(i=0;i<arr[0].length;i++){
        match=true
for(j=1;j<arr.length;j++){
    if(arr[j].length<i|| ch!=strs[j][i]){
        match=false
        break
    }
}
if(match==false){
    break;
}else{
    ans+=ch
}
    }
    return ans
}
let a=common(arr)
console.log(a)