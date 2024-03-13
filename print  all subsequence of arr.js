function printSubsequences(arr, index, path)
{
  if (index == arr.length)
  {
    if (path.length > 0) console.log((`[${path}]`));
    if(path.length==0){
       console.log([])
    }
  }
else
  {
    printSubsequences(arr, index + 1, path);
 
    path.push(arr[index]);

    printSubsequences(arr, index + 1, path);

    path.pop();
  }
  return;
}
let arr=[3,1,2]
path=[]
let a=printSubsequences(arr, 0, path)
console.log(a)