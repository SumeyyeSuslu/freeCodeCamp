
function repeatStringNumTimes(str, num) {
  // repeat after me
  var newString = '';
  for (var i=num; i>0; i--){
    newString = newString + str;
    
  }
  if (num < 0)
    return "";
  return newString;
}

repeatStringNumTimes("abc", 3);
