function  commonElements(arr1, arr2, arr3, n1, n2,n3){
    let i=0
    let j=0
    let k=0
    let ans=[]
    let prev1,prev2,prev3
    prev1=prev2=prev3=-Infinity
    while(i<n1 && j<n2 && k<n3){
        while(arr1[i]==prev1 && i<n1){
            i++
        }
        while(arr2[j]==prev2 && j<n2){
            j++
        }
        while(arr3[k]==prev3 &&k<n3){
            k++
        }
        if(arr1[i]==arr2[j] && arr2[j]==arr3[k]){
         
            prev1=arr1[i]
            prev2=arr2[j]
            prev3=arr3[k]
            ans.push(arr1[i])

            i++
            j++
            k++
        }else if(arr1[i]<arr2[j]){
            prev1=arr1[i]
            i++
        }else if(arr2[j] <  arr3[k]){
            prev2=arr2[j]
            j++
        }else{
            prev3=arr3[k]
            k++
        }
    }
    return ans
}
let arr1=[1,5,10,20,40,80]
let arr2=[6,7,20,80,100]
let arr3=[3,4,15,20,30,70,80,120]
let a= commonElements(arr1, arr2, arr3, 6, 5,8)

console.log(a)