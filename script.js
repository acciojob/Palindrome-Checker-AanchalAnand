// complete the given function

function palindrome(str){
  lrt s=str.replaceAll(' ','');
	let newstr=s.reverse();
	for(let i=0;i<s.length;i++){
	if(s[i]==newstr[i]) return true;
	return false;
	}
}
module.exports = palindrome
