var words = [""];
str= "apple is a good fruit"
for(var i = 0; i < str.length; i++)
  if(str[i] !== " ")
    words[words.length - 1] += str[i];
  else if(words[words.length - 1])
    words.push("");

console.log(words)