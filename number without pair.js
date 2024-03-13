function withoutPair(arr){
    let mp=new Map()
    for( i =0;i<arr.length;i++){
        if(mp.has(arr[i])){
            mp.set(arr[i],mp.get(arr[i])+1)
        }else{
            mp.set(arr[i],1)
        }
    }
for( let k of mp){
    if(k[1]%2==1){
        console.log("without pair is "+k[0])
    }
    
}
}

arr=[11,1,7,11,1,2,2,3,3,3,48,4,4,48]
let a= withoutPair(arr)
console.log(a)