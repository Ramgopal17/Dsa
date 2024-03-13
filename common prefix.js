let arr=["flower","flow","fly"]
function prefix(arr){
    let ans=""
    for(i=0;i<arr[0].length;i++){
        ch=arr[0][i]
    
    let match =true
    for(j=1;j<arr.length;j++){
        if(arr[j].length<i || ch!=arr[j][i]){
match=false
break
        }
    }
    if(match==false){
        break
    }else{
        ans+=ch
    }

}
return ans
}

let a=prefix(arr)
console.log(a)