let arr = [5, 2, 3, 9, 4, 6, 7, 15, 32];
let  n = 9;
function sortBySetBitCount(arr,n)
{
    arr.sort(function(a,b){
        c1 = Number(a.toString(2).split("").sort().join("")).toString().length;

        c2 = Number(b.toString(2).split("").sort().join("")).toString().length;
         
        return c2-c1;
    })
    return arr
}

let a=sortBySetBitCount(arr,n)
console.log(a)