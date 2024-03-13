// var x="100"
// var y=100
// if(x==y){
//     console.log("x an y is same" )
// }else{
//     console.log(" not same")
// }


// var name="Tamanna";
// var gender="male"

// if(gender==="male"){
//     console.log("hello Mr."+name)
// }else{
//     console.log("hello Mrs"+name)
// }
// -------------------------------------if else if-------------------------------------------------------------------------------------------fo

// var per = 55

// if(per>=80 && per<=100){
//     console.log("you are in merit")
// } else if(per>=60 && per<80){
//     console.log("you are 1st division ")
// }else if(per>=45 && per<60){
//     console.log("you are 2nd division")
// } else if(per>=33 && per<45){
//     console.log("you are 3rd division")
// }else if(per<33){
//     console.log("you are in fail")
// }else{
//     console.log("please enter a valid percentage")
// }


// ----------------------------------------------- switch case-------------------------------------------------------


// var age=16

// switch(true){
//     case (age>=15 && age<20):
//         console.log("you are eligible")
//         break;

//     case  (age>=20 && age<30) :
//     console.log("you are not eligible")  
//     break;
    
//     default:
//         console.log("please enter the valid age")
// }

// var day =1

// switch (day){
//     case 1:
//         console.log("monday")
//         break;
//         case 2:
//         console.log("tuesday")
//         break;
//         case 3:
//         console.log("wednesday")
//         break;
//         case 4:
//         console.log("thursday")
//         break;
//         case 5:
//         console.log("friday")
//         break;
//         case 6:
//         console.log("saturday")
//         break;
//         case 7:
//         console.log("sunday")
//         break;
//         default:
//             console.log("please enter the week day")
// }


// --------------------------------------------------------------------while loop------------------------------------------

// var arr=[1,2,3,4,5]
// let a=0

// while(a<arr.length){
//     console.log(arr)
//     a=a+1
// }

// -------------------------------------------------------------do while--------------------------------------------------

// var b=1
// do{
//     console.log("this is do whileloop")
//     b++
// }while(b<10)

// -----------------------------------------------break and continue------------------------------------------
// arr=[5,4,6,8,9]
// for(i=0;i<arr.length;i++){
//     if(arr[i]==6)
//     break;
//     console.log(arr[i])
// // }

// arr=[6,8,9,2,3]
// for(i=0;i<arr.length;i++){
//     if(arr[i]==2)
//     continue;
//     console.log(arr[i])
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------


// for(i=1;i<=100;i=i+10){
//     for(j=i;j<i+10;j++){
//     process.stdout.write(`${j} `)
//     }
    
//     process.stdout.write("\n ")

// }

// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for(i=1;i<5;i++){
//     for(j=1;j<=i;j++){
//     process.stdout.write(j+" ")
//     }
//     process.stdout.write("\n")
// }


// for(i=1;i<5;i++){
//     for(j=1;j<5;j++){
//     process.stdout.write(j+" ")
//     }
//     process.stdout.write("\n")
// }

// let i=1
// while(i<5){
// let j=1
// while(j<5){
//     process.stdout.write(j+" ")
//     j++
// }
// process.stdout.write("\n")
//     i++

// }
// 1 2 3 4 
// 1 2 3 4 
// 1 2 3 4 

// for(i=4;i>=1;i--){
//     for(j=1;j<=i;j++){
//         process.stdout.write(j+" ")
//     }
//     process.stdout.write("\n")
// }

// let i=4
// while(i>=1){

//     let j=1
//     while(j<=i){
//         process.stdout.write(j+" ")
//        j++
//     }
//     process.stdout.write("\n")
//     i--
// }

// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 
// for(i=1;i<4;i++){
//     for(j=3;j>0;j--){
//     process.stdout.write(j+" ")
//     }
//     process.stdout.write("\n")
// }


// let i=1
// while(i<4){

//     let j=3
//  while(j>0){
//         process.stdout.write(j+" ")
//         j--
//     }
//     process.stdout.write("\n")
//      i++
// }

// 3 2 1 
// 3 2 1 
// 3 2 1 

// for(i=1;i<5;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write("*"+" ")
//     }
//     process.stdout.write("\n")
// }

// *
// **
// ***
// ****


// for(i=1;i<9;i=i+3){
//     for(j=i;j<i+3;j++){
//         process.stdout.write(j+" ")
//     }
//     process.stdout.write("\n")
// }

// 1 2 3 
// 4 5 6 
// 7 8 9 

// for(i=5;i>0;i--){
//     for(j=1;j<=i;j++){
//         process.stdout.write(j+" ")
//     }
//     process.stdout.write("\n")
// }


// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 


// for(i=1;i<5;i++){
//     for(j=1;j<5;j++){

//         process.stdout.write("*"+" ") 
//     }
//     process.stdout.write("\n")
// }

// * * * * 
// * * * * 
// * * * * 
// * * * *

// let n=5
// for(i=1;i<=n;i++){
//     for(j=5;j>=i;j--){
//         process.stdout.write(j+" ")
//     }
//     process.stdout.write("\n")
// }

// 5 4 3 2 1 
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5


// let n=5
// for(i=1;i<=n;i++){
//     for(j=5;j>=i;j--){
//         process.stdout.write(j+" ")
//     }
//     process.stdout.write("\n")
// }

// 5 4 3 2 1 
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5 

// let n=5
// for(i=1;i<=n;i++){
//     for(j=1;j<=n-i+1;j++){
//         process.stdout.write("*"+"  ")
//     }
//     process.stdout.write("\n")
// }

// *  *  *  *  *  
// *  *  *  *  
// *  *  *  
// *  *  
// *  


// let n=5
// for(i=1;i<=n;i++){
//     for(j=1;j<=n-i+1;j++){
//         process.stdout.write(i+"  ")
//     }
//     process.stdout.write("\n")
// }
// 1  1  1  1  1  
// 2  2  2  2  
// 3  3  3  
// 4  4  
// 5  

// let n=5
// for(i=1;i<=n;i++){
//     for(j=1;j<=i;j++){
//         process.stdout.write(i+"  ")
//     }
//     process.stdout.write("\n")
// }

// 1  
// 2  2  
// 3  3  3  
// 4  4  4  4  
// 5  5  5  5  5  


// let n=5
// for(i=1;i<=2*n-1;i++){

//     let c=i>n?2*n-i:i

    
//     for(j=1;j<=c;j++){
//         process.stdout.write("*" +"  ")
//     }
//     process.stdout.write("\n")

// }

// *  
// *  *  
// *  *  *  
// *  *  *  *  
// *  *  *  *  *  
// *  *  *  *  
// *  *  *  
// *  *  
// *  
// ----------------------------------------------------------------------------------

// let sum=0
// let i=0
// while(i<=10){
//     sum=sum+i

// i++
// }console.log(sum)

// let n=4
// let product=1
// let i=1
// while(i<=10){
//     product=n*i
//     console.log(product)
// i++
// }


// let res=1
// let n=5

// for(i=1;i<=5;i++){
//     res=res*i

// }    console.log(res)

// let res=1
// let n=5
// let i=1
// while(i<=n){
//     res=res*i
//     i++
// }
// console.log(res)

// let temp=[]
// let s="12345".split("")
// for(i=s.length-1;i>=0;i--){
//     temp.push(s[i])
//     var d=temp.join("")
   
// } console.log(d)



// s="12345"
// let temp=[]
// for(i=s.length-1;i>=0;i--){
//     temp.push(s[i])
//     var d=[...temp]
//     var e=d.join("")

   
// } console.log(e)


// let temp=0
// let a=[5,4,8,9,6,7,6]
// var sum=0
// for(i=0;i<a.length;i++){
 
//     if(a[i]%2==0){
//         sum=sum+a[i]
        
//     }else if(a[i]%2!=0){
//           temp=temp+a[i]
//     }
// }
// console.log(sum)
// console.log(temp)

// let base=3
// let power=3
// let product=1
// for(i=0;i<power;i++){
//     product=product*base

// }
// console.log(product)


// ----------------------------------------------------------diamond structure----------------------------

// let n=5
// for(i=1;i<=2*n-1;i++){

   
//     c=i>n?2*n-i:i

//     for(s=0;s<n-c;s++){
//         process.stdout.write(" ")
      
//     for(j=1;j<=c;j++){
//         process.stdout.write("*" +"  ")
    
//     }
//     process.stdout.write("\n")

//     }}

    
    

// let n=5
// for(i=1;i<=n;i=i+1){
//     for(j=1;j<=n-i+1;j=j+1){
//         process.stdout.write(j+i-1+"  ")
//     }
//     process.stdout.write("\n")
// }

// 1  2  3  4  5  
// 2  3  4  5  
// 3  4  5  
// 4  5  
// 5  

// arr=[1,2,3,4]

// let a=4
// for (let i=0;i<arr.length;i++){
// if(i==0){
// arr[0]=-1

// }else if(i>0){

//  arr[i+1]=arr[i]

// }
// }

// console.log(arr)


// function factorial(n){
//     if(n==0||n==1){
//         return 1
//     }else {
//        return  n*factorial(n-1)
//     }
// }

// console.log(factorial(5))

// let arr=[10,20,30,40,50,60,70,80,90,100]

// let sum=110
// let a= arr.length
// let count=0
// for(i=0;i<a/2;i++){
//     for(j=a/2;j<a;j++){
//         if(arr[i]+arr[j]==sum){
//             count++
//         }
//     }

// }
// console.log(count)

// function star(){
//     for(i=0;i<5;i++){
//         process.stdout.write("*")
//     }
// }
// star()