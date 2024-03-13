let arr = [4, 1, 1, 1, 2, 3, 5]
k = 5
function largestSum(arr, k) {
    let i = 0
    let j = 0
    let sum = 0
    let max = 0
    while (j < arr.length) {
        sum += arr[j]
        if (sum < k) {
            j++
        } else if (sum == k) {
            max = Math.max(max, j - i + 1)
            j++
        } else if (sum > k) {
            while (sum > k) {
                sum -= arr[i]
                i++
            }
            j++
        }

    }
    return max
}

let a = largestSum(arr, 5)
console.log(a);