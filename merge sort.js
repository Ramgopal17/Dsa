function mergeSort(arr,s,e){
    if(s>=e){
      return 
      }

      mid=Math.floor((s+e)/2)
      mergeSort(arr,s,mid)
      mergeSort(arr,mid+1,end)
      merge (arr,s,mid,e)
}

function merge (arr,s,mid,e){
    let arr1=[]
    let arr2=[]

    let lenArr1=mid+1-s
    let lenArr2=e-mid
    for(i=0;i<lenArr1;i++){
        arr1[i]=arr[s+i]
    }
    for(j=0;j<lenArr2;j++){
        arr2[i]=arr[mid+1+j]
    }

    let a=0
    let b=0
    let c=s
    while(a<lenArr1 && b<lenArr2){
        if(arr1[a]<=arr2[b]){
            arr[c]=arr1[a]
            a++
        }else{
            arr[c]=arr2[b]
            b++
            
        }
        c++
    }
    while(a<lenArr1){
        arr[c]=arr1[a]
        a++
        c++
    }
    while(b<lenArr2){
        arr[c]=arr1[b]
        b++
        c++
    }


}

arr=[12,1,45,36,88,4,8,6,3]

let a= merge (arr,0,8)
console.log(a)