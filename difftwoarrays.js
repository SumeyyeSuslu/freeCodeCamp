
function diffArray(arr1, arr2){
  var diff1 = arr1.filter(filtreleme, arr2);
  var diff2 = arr2.filter(filtreleme, arr1);
  return diff1.concat(diff2);
  
}
 function filtreleme(val){
    return (this.indexOf(val) === -1);
  }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}*/
