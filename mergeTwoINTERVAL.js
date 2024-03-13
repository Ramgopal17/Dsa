let intervals=[[1,6],[2,4],[8,10],[15,18]]

function mergeInterval(intervals){
    let right=[intervals[0]]
    for(let interval of intervals){
        let e1=right[right.length-1][1]
        let s2=interval[0]
        let e2=interval[1]
        if(e1>=s2){
            right[right.length-1][1]=Math.max(e1,e2)

        }else{
            right.push(interval)
        }
    }
return right
}
let a=mergeInterval(intervals)
console.log(a);