function titleCase(str) {
  var word = str.toLowerCase().split(" ");
  for ( var i =0; i< word.length; i++){
    
      word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
  
     
  }
    
  return word.join(" ");
}

titleCase("I'm a little tea pot");
