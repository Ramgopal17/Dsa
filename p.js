// function countkDist(str , k)
// {
//     // Initialize result
//     var res = 0;
 
//     var n = str.length;
 
//     // To store count of characters from 'a' to 'z'
//     var cnt = Array.from({length: 26}, (_, i) => 0);
//     console.log(cnt);
 
//     // Consider all substrings beginning with
//     // str[i]
//     for (i = 0; i < n; i++)
//     {
//         var dist_count = 0;
 
//        // Consider all substrings between str[i..j]
//         for (j=i; j<n; j++)
//         {
//             // If this is a new character for this
//             // substring, increment dist_count.
//             if (cnt[str.charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)] == 0)
//                 dist_count++;
 
//             // Increment count of current character
//             cnt[str.charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)] +1;
 
//             // If distinct character count becomes k,
//             // then increment result.
//             if (dist_count == k)
//                 res++;
//         }
//     }
 
//     return res;
// }
 
// let a=countkDist("abc" , 2)
// console.log(a);


// let arr=[0,3,1,2]

// let map={}

// for(i of arr){
// map[i]=(map[i]||0)+1
// }
// console.log(map);
// for(key in map){
//     if(map[key]!=1){
//         return key
// //     }
// }
// let arr=[3,1,2,5,3]

// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             console.log(arr[i])
//         }
//     }
// }


// let a=Math.min(...arr)
// let b=Math.max(...arr)
// for(i=a;i<=b;i++){
//     if(arr.includes(i)==false){
//         console.log(i)
//     }
// }

// let nums=[3,1,2,5,3]

let nums=[0,1]

    let n=Math.max(...nums)
    let sum=n*(n+1)/2
    let total=0
    for(i=0;i<nums.length;i++){
      total=total+nums[i]
      
    }
    let d=sum-total
    
    console.log(d)