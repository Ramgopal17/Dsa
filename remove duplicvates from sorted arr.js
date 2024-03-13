var removeDuplicates = function (nums) {
    let map = {}
    for (i of nums) {
        map[i] = (map[i] || 0) + 1

    }

    let res = []
    for (key in map) {
        res.push(key)

    }
    return res
};

// let nums = [0,0,1,1,1,2,2,3,3,4]
let nums = [1, 1, 2]
let a = removeDuplicates(nums)
console.log(a);