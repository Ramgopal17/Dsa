let arr1=[1,2,3,4]
let arr2=[1,4,9,17]
function isSquare(arr1,arr2){
for(i=0;i<arr1.length;i++){

    let isSquare=false;
    for(j=0;arr2.length;j++){
        if(arr1[i]*arr1[i]===arr2[j]){
          isSquare= true

        }
        if(j===arr2.length-1){
            if(!isSquare){
                return false
            }
        }
    }
}
return true
}
let a=isSquare(arr1,arr2)

console.log(a)