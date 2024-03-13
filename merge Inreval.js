let intervals =  [[1,6],[2,9],[8,10],[15,18]]

function mergeInterval(intervals){
    intervals.sort((a,b)=>(a[0]-b[0]))
    let res=[intervals[0]]
    for(let interval of intervals){
   let e1=res[res.length-1][1]
   let e2=interval[1]
   let s2=interval[0]
       if(e1>=s2){
        res[res.length-1][1]=Math.max(e1,e2)
       }else{
        res.push(interval)
       }
    }
       return res
}

let a=mergeInterval(intervals)
console.log(a);