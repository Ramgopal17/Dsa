// let a=5
// let b=a
//  b=6
//  console.log(a)



// const lodash = require("lodash")

let a={
    name:"ram",
    age:25,
    address :{
        city:"delhi",
        pin : 55
    },
    date: new Date(),
    name : function(){

    }
    
}
// let b=a

// const b = Object.assign({}, a);
// //  b = {...a} // shallow copy only
let b = JSON.parse(JSON.stringify(a))
// let b = lodash.cloneDeep(a)
b.age=30
b.address.city = "indore"
console.log(a);
// console.log(typeof(a.date));
// console.log(typeof(b.date));

// console.log(a)



let v = []; // #ff465kh
let r = [];;;;;  // #ff45879
// console.log(v==r);
// console.log(v===r);


// console.log("55"-"5")