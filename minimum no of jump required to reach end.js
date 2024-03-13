function minimumJump(arr){
    let pos=0
    let jump=0
    let des=0

    for(let i=0;i<arr.length;i++){
        des=Math.max(des,arr[i]+i)

        if(pos==i){
            pos=des
            jump++
        }
    }
    return jump
}
arr=[2,3,1,1,4]

let a=minimumJump(arr)
console.log(a)