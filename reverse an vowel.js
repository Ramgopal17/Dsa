let s = "hello world"
let str = s.split("")

function ReverseAnVowel(str){
let vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 }
let arr = []
for (i = 0; i < str.length; i++) {

    if (vowels[str[i]]) {
        arr.push(i)
    }

}
let left=0;
let right=arr.length-1
while(left<right){
[str[arr[left]],str[arr[right]]]=[str[arr[right]],str[arr[left]]]
// console.log(str[arr[right]])
left++
right--
}
 return str.join("")
}
let a=ReverseAnVowel(str)
 console.log(a)
