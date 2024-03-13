function PalinArray(arr,n){
    for(let i=0;i<n;i++){
        let sum=0
         x=arr[i]
     while(x>0){
            let a=x%10
          sum=sum*10+a
        x =Math.floor(x/10)
        }
        if(arr[i]!=sum){
            return 0
        }
    }
   return 1
  }
let arr=[111,222,333,444,555]
  let a= PalinArray(arr,5)
  console.log(a)
