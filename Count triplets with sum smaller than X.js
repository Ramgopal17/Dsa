let arr=[3,8,12,15,50,1,5]
let sum=20

function tripletount(arr,sum){
    arr.sort((a,b)=>a-b)
    let c=0
    let n=arr.length-1
    for(k=0;k<arr.length;k++){
        i=k+1
        j=n-1
        while(i<j){
       
        let s=arr[i]+arr[j]+arr[k]
        if(s<sum){
            c+=(j-i)
            i++
        }else{
            j--
        }
    }
}
return c

}
let a=tripletount(arr,sum)
console.log(a)
