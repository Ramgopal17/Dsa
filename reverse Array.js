function reverseArray(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {

        // ES6 method for swapping
        // [arr[left], arr[right]] = [arr[right], arr[left]]

         arr[left]=arr[left]+arr[right]
         arr[right]=arr[left]-arr[right]
         arr[left]=arr[left]-arr[right]
        left++
        right--
    }
    return arr
}
let arr = [1, 2, 3, 4, 5, 6]
let s = reverseArray(arr)
console.log(s);