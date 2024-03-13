// function colors(){
    
//     let data=20;
//     console.log(data)
//     if (true){
//         console.log(data*20)
//     }
    

//     }
//     function days(){
//         colors();
//     }
//     function fruits(){
//         days()
//     }
//     function  topFunction(){
//         fruits()
//     }
// topFunction()


//  head and tail recurssion 
//  function test(x){
//     console.log(x)
//     if(x>0){
//         test(x-1)
//     }

//     // console.log(x)
//  }
//  test(5)



// Reverse array with recurssion 


// let data=[5,12,65,89,0,100]
// let temp ;

// function customReverse(data,start,end){
//     console.log(data)

// if(start<=end){
//     temp=data[start];
//     data[start]=data[end]
//     data[end]=temp

//     customReverse(data,start+1,end-1)
// }
// }

// customReverse(data,0,data.length-1)

// // [ 5, 12, 65, 89, 0, 100 ]
// // [ 100, 12, 65, 89, 0, 5 ]
// // [ 100, 0, 65, 89, 12, 5 ]
// // [ 100, 0, 89, 65, 12, 5 ]






 
//  function fun1(n)
//  {
//      let i = 0;  
      
//      if (n > 1){
//          fun1(n - 1);
//      }


//      for(i = 0; i < n; i++){
     
//         process.stdout.write("*")
//  }

//  process.stdout.write("\n")
// }
 
// let a=fun1(5)
// console.log(a)

  


 
 let LIMIT = 1000;
 function fun2(n)
 {
     if (n <= 0)
         return;
     if (n > LIMIT)
         return;
  
         console.log(n + " ");
     fun2(2 * n);

  
 }

fun2(15)


// function countDown(count){
    
// if(count<0){
//     return 
// }

//     console.log(count)
//     count--
//     countDown(count)
//       console.log(count)
// }

// countDown(9)
 

// // function with return 

// function sumRange(num){
      
// if(num==1){
//     return 1
// }

//     return num+ sumRange(num-1)
// }

// console.log(sumRange(10))


// // function f(n){
// //     if(n==0||n==1){
// //         return 
// //     }
// // else if(n>1){
// //    f(n)=f(n-1)+f(n-2)
// // }}

// // console.log(f(10))

// // recurssion by technical suneja
// let count=1
// function demo (num){

//     if(count>num){
//         return 
//     }
//     console.log("like this video")
//     count++
//     demo(num)

// }
// demo(10)
// //  fibonnacci series

// function fb(n){
   
//     if(n==0){
//         return 0;
//     }
//     else if(n==1|| n==2){
//         return 1
//     }
//     fb(n)=fb(n-1)+fb(n-2)
//     return fb(n)
// }
 
// let a=fb(6)
// console.log(a);
// //  advance recurssive function by technical suneja
// function countDown(n){
//     for(i=n;i>0;i--){
//         console.log(i);
//     }
// }
// countDown(3)

// function recurssiveCountDown(n){
//     if(n==0){
//     return 
//     }else{
//         console.log(n);
//         recurssiveCountDown(n-1)
       
//     }
    
// }
// recurssiveCountDown(3)


// function totalSum(n){
//     let total=0
//     for(i=0;i<=n;i++){
//         total+=i
//     }
//     return total
// }
// console.log(totalSum(3))

// function recurssiveSum(n,total){
//     if(n==0){
//         return total
//     }
// return recurssiveSum(n-1,total+=n)
// }
// console.log(recurssiveSum(3,0))

// function countDown(n){
//     if(n==0){
//         return 0
//     }
//         console.log(n)
//         countDown(n-1)
    
// }
// countDown(5)


// function sumRange(n){
//     if(n==1){
//         return 1
//     }
//         return n+sumRange(n-1)
// }
// let a=sumRange(5)
// console.log(a);

// product of array

// let arr=[3,4,5,8,9]
// function product(arr){
//     if(arr.length==0){
//         return 1
//     }
//     return arr[0]*product(arr.splice(1))
// }
// let a=product(arr)
// console.log(a);


// // power fuction recursively 

function power(b,exp){
    if(exp==0){
        return 1
    }
    return b*power(b,exp-1)

}


 a=power(3,4)

 console.log(a);

// product of a string using recurssion codezinger

// function pd(str){
//     let arr=str.split("")
//     let size=arr.length
//     return product(arr,size)
// }
// function product(arr,size){
//     if(size<0){
//         return -1
//     }
//     if(size==1){
//         return arr[0]
//     }
//     return arr[size-1]*product(arr,size-1)
// }

// str="1231"
// let a= pd(str)
// console.log(a)


// let s1="hello world"
// let arr=s1.split("")
// let s2="albcllsyaaaaaaaa"
// let p=s2.split("")

// let mp=new Map()

// let map= new Map

// for(i=0;i<arr.length;i++){
//     if(mp.has(arr[i])){
//         mp.set(arr[i],mp.get(arr[i])+1)
//     }else{
//         mp.set(arr[i],1)
//     }
    
// }
// let ans
// max=-Infinity
// for(item of mp){
//     if(item[1]>max){
//         max=item[1]
//     ans=item[0]}
//       }
        

    //   console.log(ans);
       
        // for(i=0;i<p.length;i++){
        //     if(map.has(p[i])){
        //         map.set(p[i],map.get(p[i])+1)
        //     }else{
        //         map.set(p[i],1)
        //     }
            
        // }
        // let res
        // max=-Infinity
        // for(r of map){
        //     if(map.has(ans)){
        //         console.log(r[0],r[1])
                
        //       }
                
        //     }         





