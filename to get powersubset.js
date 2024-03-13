let arr=[1,2,3]

// let output=[[],[1],[2],[1,2][3],[1,3],[2,3],[1,2,3]]


function powerSet(arr){
    let res=[[]]
    for(let ele of arr){
        let len=res.length
        for(i=0;i<len;i++){
            temp=res[i].slice(0)
            temp.push(ele)
            res.push(temp)
        }
    }
    return res
}

// let a=powerSet(arr)
// console.log(a)

console.log(powerSet([1,2,3]))