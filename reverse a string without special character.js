// s="ab-cd"
// arr=s.split("")

// for(i=arr.length-1;i>=0;i--){

//     console.log(typeof arr[i])


// }


// javascript program to create a unique String using unordered_map

/* access time in unordered_map on is O(1) generally if no collisions occur
and therefore it helps us check if an element exists in a String in O(1)
time complexity with constant space. */
// function removeDuplicates( s , n) {
// 	var exists = new Map();

// 	var st = "";
// 	for (var i = 0; i < n; i++) {
// 		if (!exists.has(s[i])) {
// 			st += s[i];
// 			exists.set(s[i], 1);
// 		}
// 	}
// 	return st;
// }

// // driver code

// 	var s = "cbacdcb"
// 	var n = s.length;
// 	console.log(removeDuplicates(s, n));

// let s=["h","e","l","l","o"]
// var reverseString = function(s) {
//     let m =[]
//     for(i=s.length-1;i>=0;i--){
//         m.push(s[i])
//     }
//     return m
// };

// let a=reverseString(s)
// console.log(a);


// var findDuplicate = function(nums) {

//     let map={}
//     for(i of nums){
//         map[i]=(map[i]||0)+1
//     }
//     for(key in map){
// if(map[key]!=1){
//     return map[key]
// }

//     }

// };

// nums=[3,1,3,4,2]                                                                                                                                                                                                                     

// let a=findDuplicate(nums)
// console.log(a)
// let s1 = "computer"
// let s2 = "cat"
// console.log(s1-s2);
// let map = {}
// let a = s1.split("")
// let b = s2.split("")
//     for (i of a) {
//         map[i] =( map[i] || 0) + 1
//     }
    
//      for (j of b) {
       
//         map[j] -= 1
//     }
//     let m=[]
//     for(key in map){
      
//         if(map[key]==1){
//          m.push(key)
//         }
//     }
// let c=m.join("")
//     console.log(c);
str = "a,b$c"
function isAlphabet(x){
    return ((x>="a" && x<="z")||(x>="A" && x<="Z"))

}


function reverse(word){

    let l=0
  let str=word.split("")
    let r=str.length-1

    while(l<r){
        
        if(!isAlphabet(str[l])){
          
            l++

          
        }else if(!isAlphabet(str[r])){
            r--
        }else if(isAlphabet(str[l]) && isAlphabet(str[r])){
            temp=str[l]
            str[l]=str[r]
            str[r]=temp
              l++
              r--
        }
    }
    let d=str.join("")
    return d
}


let a=reverse(str)
console.log(a)




