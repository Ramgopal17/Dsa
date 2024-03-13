function mergeSort(arr,s,e){
    if(arr.length<=1){
        return arr
    }
    mid=Math.floor((arr.length)/2)

    mergeSort(arr,s,mid)
    mergeSort(arr,mid+1,e)
    merge(arr,s,mid,e)
}

function merge(arr,s,mid,e){
    let arr1=[]
    let arr2=[]
    l1=mid-s+1
    l2=e-mid
    for(let i=0;i<l1;i++){
        arr1[i]=arr[s+i]
    }
    for(let j=0;j<l2;j++){
        arr[j]=arr[mid+1+j]
    }

    let a=0
    let b=0
    let c=0
    while(a<l1 && b<l2){
        if(arr1[a]>arr2[b]){
            arr[c]=arr2[b]
            b++
        }else{
            arr[c]=arr1[a]
            a++
        }
        c++
    }
    while(a<l1){
        arr[c]=arr1[a]
        a++
        c++
    }
    while(b<l2){
        arr[c]=arr2[b]
        b++
        c++
    }
}
let arr= [5,4,3,2,1]
let a=mergeSort(arr,0,4)
console.log(a)