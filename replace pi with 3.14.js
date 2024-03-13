function replacePi(s){
    if(s.length==0){
        return 
    }
    if(s[0]=="p" && s[1]=="i"){
        console.log(3.14)+replacePi(s.slice(2))
    }
    else{
        console.log(s[0])+replacePi(s.slice(1))
    }
}

let s="pippxxpiixipi"
let a=replacePi(s)
