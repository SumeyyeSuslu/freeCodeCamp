
// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// Example
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;
  

// Only change code below this line.

//var expression = /./gi;  // Change this Line
  var expression = /and/gi;

// Only change code above this line

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;
