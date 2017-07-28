function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newString;
  if (str.length > num && num>3){
    newString =  str.slice(0, num -3) + "...";
  }
  if (num<=3){
    newString =  str.slice(0, num) + "...";
  }
  if (str.length <= num){
    return str;
  }
  return newString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
