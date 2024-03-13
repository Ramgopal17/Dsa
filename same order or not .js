let a=[ 10, 12, 9, 11]
let b=[2, 7, -3, 5 ]
function sameOrder(a,b){
    n=a.length
    let arr=[]
for(let i=0;i<n;i++){
    arr.push([a[i]],[b[i]])

}
arr.sort((a,b)=>a[0]-b[0])
return arr
}

let c= sameOrder(a,b)
console.log(c)