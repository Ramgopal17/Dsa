// str="level"
// let s=0
// let e=str.length-1

// function isPolindrome(str){
//     if(str.length==0){
//         return true
//     }

//   return  isPolirec(str,s,e)
// }

// function isPolirec(str,s,e){

//     if(s==e){
//         return true
//     }else if (str.charAt(s)!=str.charAt(e)){
//         return false

//     }

//     if(s<e+1){
//        return  isPolirec(str,s+1,e-1)
//     }
// }

// let a=isPolindrome(str)
// console.log(a)
// let str="level"
// function isplr(str){
//     if(str.length<=0){
//         return true
//     }
//     if(str[0]==str.slice(-1)) return isplr(str.slice(1,-1))

//     else return false

// }

// let a=isplr(str)
// console.log(a)
// let m=[]
// let arr=["hi","hello","hola"]
// for(i=0;i<arr.length;i++){
// let a=arr[i][0].toUpperCase()

// a.concat(arr[i].slice(1))
// m.push(a)
// }

// console.log(m)
// let left=0
// let right=str.length-1


function isPali(str,left,right){
   
    if(left>right){
        return 
    }
    
        if(left<right){
            if(str[left]===str[right]){
                return isPali(str,left+1,right-1)
            }else{
              return  false
            }
        }
        return true
    }

 


str="level"

let a=isPali(str,0,5)

console.log(a)