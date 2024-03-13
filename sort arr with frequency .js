var frequencySort = function (s) {
    let map = {}
    for (i of s) {
        map[i] = (map[i] || 0) + 1
    }
    let arr = Object.entries(map)
    arr.sort((a, b) => (b[1] - a[1]))
    let res = ""
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i][1]; j++) {
            res += arr[i][0]
        }
    }
    return res
};


s = "geekforgeek"
let d = frequencySort(s)
console.log(d)