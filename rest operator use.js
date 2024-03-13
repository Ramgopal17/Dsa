
function add(...a){
    let s=0
    for(i=0;i<a.length;i++){
    s=s+a[i]
    }
    return s 
}

let a=add(2,3,5)
console.log(a);