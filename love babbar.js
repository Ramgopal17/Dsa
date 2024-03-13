// searching and sorting
let arr=[1,3,5,5,5,5,67,123,125]
function search(arr){
let res=[]

for(i=0;i<arr.length;i++){
    if(arr[i]==5){
        res.push(i)
       
    }

}
console.log((res.at(0), res.at(-1)))
}


let a=search(arr)


