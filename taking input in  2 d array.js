let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
function input(arr)
{     let sum=0
    for(i=0;i<3;i++){
   
        for(j=0;j<3;j++)
    sum+=arr[i][j]
    }
    return sum
}

let a=input(arr)
console.log(a)