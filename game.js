  var gamePatern = [];
  var buttonColors = ["red", "blue", "green", "yellow"];
  var userClickedPattern = [];
  var started = false;
  var level = 0;

function resetGame() {
  gamePatern = [];
  started = false;
  level = 0;
}

$(document).keypress(function(){
  if (!started) nextSequence();
  started = true;
})

function nextSequence(){
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
  var buttonPressed = buttonColors[randomNumber];
  gamePatern.push(buttonPressed);
  $("#"+buttonPressed).fadeOut(100).fadeIn(100);
  playSelectedSound(buttonPressed)
  level++;
  $("h1").text("Level "+level)
}


function comparePaterns(i){
  if (userClickedPattern[i-1] === gamePatern[i-1]){
    if (i === gamePatern.length){
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  else{
    gameOver();
  }
}
function playSelectedSound(color){
  audio= new Audio(`sounds/${color}.mp3`);
  audio.play();
}

function animatePressed(color){
  $("#"+color).addClass("pressed");
  setTimeout(function() {
    $("#"+color).removeClass('pressed');
  }, 100);
}

function gameOver(){
  audio= new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass('game-over');
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart")
  resetGame();
}


  $(".btn").click(function(event){
    if (started){
      userClickedPattern.push(event.target.id);
      playSelectedSound(event.target.id);
      animatePressed(event.target.id);
      comparePaterns(userClickedPattern.length);
    }
  })