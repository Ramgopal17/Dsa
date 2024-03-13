
let animal=["cat","horse","rat","cow","cow","horse","rat","rat"]
function MaxAnimal(animal){
    let map={}
    let char
    max=-Infinity
    for( i of animal){
        map[i]=(map[i]||0)+1
        if(map[i]>max){
            max=map[i]
            char=i
        }
    }
    return char
}

let a=MaxAnimal(animal)
console.log(a);