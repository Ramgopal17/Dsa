function removeDuplicate(arr){
    let i=0

    for(let j=1;j<arr.length;j++){
        if(nums[j]!=nums[i]){
            i++
            nums[i]=nums[j]
        }
    }
    return i+1
}
let arr=[]
let a=removeDuplicate(arr)
console.log(a)