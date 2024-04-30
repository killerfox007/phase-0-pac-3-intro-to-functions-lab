function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function loveTo(string) {
   return "Let's have dinner together!"
  }
  
  function logShout(string){
  console.log('HELLO')
  }
  function logWhisper(string){
    console.log('hello')
  }
  
  
    function sayHiToHeadphonedRoommate(string) {
      if (string === whisper(string)) {
       return "I can't hear you!";
      } 
      
      else if (string === shout(string)){
        return "YES INDEED!"
      
      } 
      
      else if (string === loveTo(string)){
      return 'I would love to!'
    }
 else {
    return "Are you Hungry?"
 }
}
      
  console.log(sayHiToHeadphonedRoommate("sET Us"))
    