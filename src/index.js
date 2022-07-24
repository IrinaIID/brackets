module.exports = function check(str, bracketsConfig) {
  // your solution

strBrackets = bracketsConfig.flat().join('');
  let bracketsOpen = '';
  let bracketsClose = '';


  for ( let i = 0; i < strBrackets.length; i++ ) {
    if ( i % 2 === 0 ) {
      bracketsOpen += strBrackets[i];
    } else {
      bracketsClose += strBrackets[i]
    }
  }

  let stackArr = [];

  for ( let i = 0; i < str.length; i++) {
    let stackLast = stackArr[stackArr.length - 1];
    let openPosition = bracketsOpen.indexOf(str[i]);
    let closePosition = bracketsClose.indexOf(str[i]);

    if ( openPosition >= 0 && openPosition !== closePosition ) {
      stackArr.push(str[i]);
    } else if ( stackArr.length === 0 && openPosition === closePosition) {
      stackArr.push(str[i]);
    } else if ( openPosition === closePosition && str[i] !== stackLast) {
      stackArr.push(str[i]);
    } else if ( stackLast === bracketsOpen[closePosition]) {
      stackArr.pop();
    } else {
      return false;
    }
  };

  if ( stackArr.length === 0 ) {
    return true;
  } else {
    return false;
  }

}



 
