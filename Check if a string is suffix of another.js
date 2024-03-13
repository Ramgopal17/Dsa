let s1="code"
let s2="coderscode"
function isSuffix(s1, s2)
{
	let n1 = s1.length, n2 = s2.length;
	if (n1 > n2)
		return false;
		
	for(let i = 0; i < n1; i++){
		if (s1[n1 - i - 1] != s2[n2 - i - 1])
			return false;
    }
	return true;
}
let c=isSuffix(s1, s2)
console.log(c)
