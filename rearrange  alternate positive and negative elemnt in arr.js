function rearrange(arr,n){
    let i=-1;
    let j=n

    while(i<n){
        while(i<n-1 && arr[i]>0){
            i+=1
        }
        while(j>=0 && arr[j]<0){
            j-=1
        }
        if(i<j){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
        if(i==0 ||i==n){
            return
        }
        let k=0
        while(k<n && i<n){
            temp=arr[k]
            arr[k]=arr[i]
            arr[i]=temp
            i=i+1
            k=k+2
        }
    }
    return arr
}
let arr=[2,3,-4,-1,6,-9]
let a=rearrange(arr,6)
console.log(a)