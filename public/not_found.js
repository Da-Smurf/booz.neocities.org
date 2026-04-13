const ErrorMsg = [
  "uh oh! looks like something broke!",
  "ermm what did you do!!",
  "WHY IS IT BROKEN",
  "why are you here???",
  "im a cute kitty!",
  "sorry my fault",
  "did you inputted something bad",
  "uhhh how did you manage to do this",
  "????????",
  "BRO HOW",
  "whatever atleast it works",
  "PLEASE WORK!!",
  "can this work properly oh my god,,,,,,",
  "plsplsplsplp work",
  "OMG NO THIS SUCKS",
  "PLEASE WORK BRO",
  "NOOO IT DIDNT FUNCTION",
  "what the helly",
  "oops sorry lol!",
  ];
  
function onDisplayText() {
  const RandomNum = Math.floor(Math.random() * ErrorMsg.length);
  const RandomText = ErrorMsg[RandomNum];
  document.getElementById("RandomError").innerHTML = RandomText;
}

window.onload = onDisplayText;
  