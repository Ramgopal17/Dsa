var reverseWords = function(s) {
    let arr = s.split(' ');
    let ans = '';
    
    for (let i = arr.length - 1; i >= 0; i--) {
   if(arr[i]!=""){
            if(ans.length > 0){
            ans += ' ';
            
            }		
			ans+= arr[i];
        }
    }
    
    return ans;
};

let a=reverseWords("the sky is blue")
console.log(a);