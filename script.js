// complete the given function

function palindrome(str){
let n=str.length-1;
	str=str.toLowerCase();
	for(let i=0;i<s.length;i++){
	if(str.charAt(i)!=str.charAt(n--)) return false;

	}
	return true;
}
module.exports = palindrome
