// complete the given function

function palindrome(str){
  str=str.replaceAll(' ','');
	let newstr=str.reverse();
	if(str==newstr) return true;
	return false;
}
module.exports = palindrome
