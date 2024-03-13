
function negative(arr,k){
    let que=[]
    let final=[]
    for(i=0;i<k-1;i++){
        if(arr[i]<0){
            que.push(arr[i])
        }
    }
    
    for(j=k-1;j<arr.length;j++){
        if(arr[j]<0){
            que.push(arr[j])
        }
        if(que.length!=0){
            final.push(que[0])
            if(que[0]==arr[j-k+1]){
                que.shift()
            }
        }else{
            final.push(0)
        }
    }
    return final
}
let arr=[12,-1,-7,8,-15,30,16,28]
let a=negative(arr,3)
console.log(a)