// let str="abcdabcdeabcdef"
let str="hellothere"
function substring(str){
    let start=0
    end=str.length-1
    let map={}
    max_window_size=0
    for(j=0;j<str.length;j++){
        if(map[str[j]]!=undefined && map[str[j]]>=0){
        start=Math.max(start,map[str[j]]+1)
    }
        map[str[j]]=j

    
    max_window_size=Math.max(max_window_size,j-start+1)
}
return max_window_size


}

let a= substring(str)
console.log(a);