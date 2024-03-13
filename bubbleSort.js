let arr = [3, 5, 2, 7, 1, 8, 0]
k=4
function sort(arr,k) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {  
                temp=arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function kthsmallest(arr,k) {
    return sort(arr,k)[k-1]
}
console.log(kthsmallest(arr,k))
