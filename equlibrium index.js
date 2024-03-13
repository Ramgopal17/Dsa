function equilibrium(arr, n)
{
    sum = 0; // initialize sum of whole array
    leftsum = 0; // initialize leftsum
  
    /* Find sum of the whole array */
    for (let i = 0; i < n; ++i){
        sum += arr[i];
    }
    for (let i = 0; i < n; ++i){
        sum -= arr[i]; // sum is now right sum for index i
  
        if (leftsum == sum)
            return i;
  
        leftsum += arr[i];
    }
  
    /* If no equilibrium index found, then return 0 */
    return -1;
}

let arr=[1,7,3,6,5,6]
let a=equilibrium(arr, 6)
console.log(a)