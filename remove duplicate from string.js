let str="geeksforgeeks"
function removeDuplicate(str){
    let map={}
    for( i of str){
        map[i]=(map[i]||0)+1
    }
    for(key in map){
        if(map[key]>1){
            map[key]=1
        }
       
    }
    return  Object.keys(map).join("")
}

let a=removeDuplicate(str)
console.log(a);