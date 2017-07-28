
function mutation(arr) {
  var array1 = arr[1].toLowerCase();
  var array0 = arr[0].toLowerCase();
  for ( var i=0; i<array1.length; i++){
    if( array0.indexOf(array1[i]) === -1){
      return false;
    }
}
  return true;
}

mutation(["hello", "hey"]);
