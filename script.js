// complete the given function

function palindrome(str){
let n=str.length-1;
	let i=0;
	str=str.toLowerCase();
	while(i<n){
	if(str.charAt(i++)!=str.charAt(n--)) return false;

	}
	return true;
}
module.exports = palindrome
