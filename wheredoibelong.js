
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(sortNumber);
  var i=0;
  
  while (arr[i] < num){
   i++;
  }
  return i;
}

getIndexToIns([5, 3, 20, 3], 5);

function sortNumber(a,b)
{
  return a - b;
}
