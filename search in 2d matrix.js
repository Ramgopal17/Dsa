// var searchMatrix = function(arr, target) {
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr[i].length;j++){
//             if(arr[i][j]!=target){
//                 return false
//             }
//         }
//     }
// return true
// };

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == target) {
                return true;
            }
        }
    }
    return false
}

let arr=[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target=3

let a=linearSearch(arr,target)
console.log(a)