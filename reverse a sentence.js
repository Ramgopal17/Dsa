function reverse(str){
    if(str.length==0) return ""
    return reverse(str.slice(1))+str[0]
}

sentence="i am good"
function revSen(sentence){
    word=sentence.split(" ")
    for(i=0;i<word.length;i++){
        word[i]=reverse(word[i])
    }
    return word.join(" ")
}

let b=revSen(sentence)
console.log(b)