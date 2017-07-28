
function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  var b = arguments[0].filter(removed,args.slice(1,args.length));
  
  return b;
}
function removed(val){
  
 return this.indexOf(val) === -1;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
