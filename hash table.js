let data = new Map([["name", "RAm"],
["true", "boolean"], [100, "hundred"]])
data.set("color","green")
// console.log(data.size)
// console.log(data.has(100))
// console.log(data.get(100));
//  data.clear()
// console.log(data)
// for(x of data){
//     console.log(x)
// }
data.forEach((val,key)=>{
    console.log(val)
})



