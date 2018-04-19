function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  
  for(var i = 0; i < musicians.length; i++) { 
      newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArr;
}

function johnLennonFacts(factsArr) {
  var newArr = [];
  var i = 0;
  
  while(factsArr) {
    newArr.push(factsArr[i] + "!!!");
    i++;
  }
  return newArr;
}