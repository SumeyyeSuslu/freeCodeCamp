
function findLongestWord(str) {
  var word =  str.split(' ');
  var longWord = 0;
  for ( var i =0; i< word.length; i++){
    if (word[i].length > longWord){
      longWord = word[i].length;
    }
  }
    return longWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
