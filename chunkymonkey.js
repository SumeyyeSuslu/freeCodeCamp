function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result = [];
  var j = 0;
  for ( var i=0; i< Math.ceil(arr.length / size); i++){
    result[i]  = arr.slice(j, j+size);
    j = j+size;
  }
  
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
