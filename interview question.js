// //  reduce array length
// let data=[5,3,5,6,4,7,1,5,6]
// data.length=3
// console.log(data);

// get  sum of array element
// let data=[5,3,5,6,4,7,1,5,6]
// let sum=data.reduce((x,y)=>x+y)
// console.log(sum);

// get duplicate value
//  let unique=new Set(data)

//  console.log([...unique]);

// comma operator

// let x=10;
// x=(x++,x)
// x=(x++,x++,x)
// x=(x+=20,5)
// console.log(x);

// swapping using destructuring

// let x=20, y=30;
// [x,y]=[y,x]

// console.log(x);


// top 50 interview question 
// Q1
// function fruit(){
//     console.log(name);
//     console.log(price);
//     var name="orange"
//      let price=20
// }
// fruit()

// Q2
// for(var i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }

// Q3
// for(let i=0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }
// Q4
// console.log(+true)
// console.log(typeof +true)

// Q5
// console.log(!"hello")
// console.log( typeof !"hello")
// Q6

// let data="size";
// const bird={
//     size:"small"
// }
// console.log(bird[data])
// console.log(bird["size"])
// console.log(bird.size)
// console.log(bird.data)

// Q7
// let c={name:"peter"};
// let d;
//  d=c
//  c.name="ram";
//  console.log(d.name);

//  Q8
// var x;
// var x=10;
// console.log(x)
// Q10
// let a=3;
// let b=new Number(3);

// console.log(a==b);
// console.log(a===b);

// Q11
// let name;
// name={}
// console.log(name);

// Q12

// function fruit(){
//     console.log("woof!")
// }
// fruit.name="apple";
// fruit()

// Q13
// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,"2"));

// Q14
// let num=0
// console.log(num++);
// console.log(++num);
// console.log(num);

// Q15
// function getAge(...args){
//     console.log(args);
// }
// getAge(21)

// Q16

// function getAge(){
//     'use strict';
//     age=21;
//     console.log(age);
// }
// getAge()

// Q17
// const sum=eval('10*10+5')
// console.log(sum);

// Q18
// sessionStorage.setItem('cool_secret',123)

// Q19

// const obj={1:"a",2:"b",3:"c"};
// let a=obj.hasOwnProperty("1")
// let b=obj.hasOwnProperty(1)
// console.log(a);
// console.log(b);

// Q20
const obj={a:"one",b:"two",a:"repeat"}
console.log(obj);