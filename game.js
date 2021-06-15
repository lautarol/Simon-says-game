var gamePatern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  gamePatern.push(randomNumber);
  chosenButton = $("#"+buttonColors[randomNumber]);
  chosenButton.fadeOut(100).fadeIn(100);
  playSelectedSound(buttonColors[randomNumber])
}


function playSelectedSound(color){
  audio= new Audio(`sounds/${color}.mp3`);
  audio.play();
}