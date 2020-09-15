function writeCards ( namesArray, event ) {
  let thankYouCards = [] 
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countDown ( startingNumber) {
  while (startingNumber > 0) {
    consolelog(startNumber); 
    startingNumber -= 1;
  }
  consolelog
}