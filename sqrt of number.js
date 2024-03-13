function sqrt(num){
    let s=0
    let e=num
    let ans=-1
    while(s<=e){
   
        let mid=Math.floor(s+(e-s)/2)
        let square=mid*mid
        if(square==num){
            return mid
        }else if(square<num){
            ans=mid
            s=mid+1
        }else{

            e=mid-1
        }
    }
    return ans
}
 function morePrecision(n,precision,tempsol){
    let factor=1
   
    let ans=tempsol
    for(i=0;i<precision;i++){
        factor=factor/10
        for(j=ans;j*j<n;j=j+factor){
            ans=j

        }
    }
    return ans
 }

// function reverseArr(num){
//     let arr=num.split("")
// let l=0
// let r=arr.length-1
// while(l<r){
//     temp=arr[l]
//     arr[l]=arr[r]
//     arr[r]=temp
//     l++
//     r--
// }
// let revNum=arr.join("")
// return revNum
// }
let d=reverseArr("12")
console.log(d)


 let tempsol=sqrt(101)
let a=morePrecision(101,3,tempsol)

console.log(a)