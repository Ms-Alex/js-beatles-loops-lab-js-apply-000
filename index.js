function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  
  for(var i = 0; i < musicians.length; i++) {
    for (var j = 0; j < instruments.length; j++) {
      newArr.push(`${musicians[i]} plays ${instruments[j]}`);
    }
  }
  return newArr;
}