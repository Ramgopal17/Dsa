

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let res = []
// max = Math.max(...arr)
// function isPrime(max){
// for (i = 2; i * i <= max; i++) {

//     if (arr[i] % i == 0) {
//    return false
//     }
// }
// return true
// }
// let a=isPrime(max)
// console.log(a)

let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];
function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result); // [ 2, 3, 5, 7, 11, 13, 17, 19]

