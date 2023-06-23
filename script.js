// complete the given function

function palindrome(str){
 let s=str.replaceAll(' ','');
	let newstr=s.reverse();
	for(let i=0;i<s.length;i++){
	if(s[i]!=newstr[i]) return false;

	}
	return true;
}
module.exports = palindrome
