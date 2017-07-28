
function rot13(str) { // LBH QVQ VG!
  var emptyString ="";
  for ( var i =0; i< str.length; i++){
    if ( str.charAt(i).match(/[N-Z]/gi)){
      
      emptyString += String.fromCharCode(str.charCodeAt(i)-13);
    }
    else if ( str.charAt(i).match(/[A-M]/gi)){
      emptyString += String.fromCharCode(str.charCodeAt(i)+13);
      
    }
     else emptyString += str.charAt(i);
  }
    
  
  return emptyString;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
