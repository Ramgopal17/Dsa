// factorial of a large number from love babbar sheet
function factorial(N)
{
let f =  BigInt(1); 

for (var i = 2; i <= N; i++)
    f *= BigInt(i);
 
return f;
}

let N = 20;
console.log(factorial(1000));