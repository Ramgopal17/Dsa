let arr=[4,1,1,1,2,3,5]
k=5                                                        
function maxSubarr(arr,k){
    let i=0
    let j=0
   let  sum=0
   let max=0
    let len=arr.length
    while(j<len){
    sum+=arr[j]
        if(sum<k){
            j++
            
        }else if(sum==k){
            if((j-i+1)>max){
                max=j-i+1
                j++
            }

        }else if(sum>k){
            while(sum>k){
                sum-=arr[i]
                i++
            
            }
            j++
            
        }
        
    }

    return max
}

let a=maxSubarr(arr,k)
console.log(a);