function palindrome(str) {
  // Good luck!
  
 /* var desired = str.replace(/[\W_]/g, "");
  var lastString = desired.toLowerCase();
  var removeSpace = lastString.split("").reverse().join(""); 
  if (lastString == removeSpace) 
    return true;
  else return false;*/
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("eye");
