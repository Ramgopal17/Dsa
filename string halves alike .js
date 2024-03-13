var halvesAreAlike = function(s) {
    let n=s.length
    let count1=0
   
    for(i=0;i<Math.floor(n/2);i++){
       if(isVowel(s[i])){
           count1++
       }
    }
     for(i=Math.floor(n/2);i<n;i++){
       if(isVowel(s[i])){
           count1--
       }
    }
    if(count1==0){
        return true
    }else{
        return false
    }


    
};

function isVowel(c){
    let vowel=["a","e","i","o","u","A","E","O","I","U"]
    if(vowel.includes(c)){
        return true
    }else{
       return false
    }

}

s="textbook"

let a=halvesAreAlike(s)
console.log(a)