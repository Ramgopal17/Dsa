// let arr = [-100,0,-100,-100,1]
// let arr = [7, 7, 5, 8, 9, 7, 7, 2, 5, 6, 7]
// let arr=[1,1,2,2,2,]
let arr=[10,1,10,1,10,1,10,1,10,1,10]
// let arr=[0,0,0,0,0,0,-1,-1,-1,-1]

function major(arr) {

    let b = Math.floor(arr.length / 2)

    let map = {}
    for (i of arr) {
        map[i] = (map[i] || 0) + 1
    }
// console.log(map);
    
    for (key in map) {
        // console.log(map[key]);
         if (map[key] >b) {

            return key
        }
         else if(map[key]==b){
              return 0
        }
       
    }
}

let a = major(arr)
console.log(a)