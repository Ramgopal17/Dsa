let detail ={ name:"ram",
                  age:25}
// Object.seal(detail)
Object.freeze(detail)
detail.village="delhi"
// console.log(detail.age=30);
detail.age=30
console.log(detail);
