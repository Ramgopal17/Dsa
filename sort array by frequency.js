arr= [2,3,1,3,2]

let l=arr.sort((a,b)=>a-b)
    let map={}
    let res=[]
    for(i of l){
        map[i]=(map[i]||0)+1
    }
    let d=Object.entries(map)
   d.sort((a,b) => a[1]-b[1] || b[0]-a[0]);
   for(i=0;i<d.length;i++){
    for(j=0;j<d[i][1];j++){
        res.push(d[i][0])
    }
}
console.log(res)
