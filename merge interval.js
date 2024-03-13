let intervals = [[1,3],[2,6],[8,10],[15,18]]

intervals.sort((a, b) => a[0] - b[0]);
function mergeInterval(intervals){
    let result=[intervals[0]]
    for(let interval of intervals){
        let e1=result[result.length-1][1]
        let  s2=interval[0]
        let e2=interval[1]
        if(e1>=s2){
            result[result.length-1][1]=Math.max(e1,e2)
        }else{
            result.push(interval)
        }

    }
    return result
}
let a=mergeInterval(intervals)
console.log(a)
