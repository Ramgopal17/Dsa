
function combinationSum(arr, target) {
    // arr.sort((a, b) => a - b);
      var ans= [];
    let temp=[]
    search(0, arr,temp, target);
    return ans;
  
    function search(i, arr,temp, target) {
      if (target === 0) ans.push(temp.slice());
      if (i === arr.length) return;
      if (target <= 0) return;
   
      temp.push(arr[i]);
      search(i,arr, temp, target - arr[i]);
      temp.pop();
      search(i + 1,arr, temp, target);
    }
  };
arr=[2,3,6,7]
target=7
let a=combinationSum(arr,target)
console.log(a)