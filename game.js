const buttonColors = ["red", "blue", "green", "yellow"];

const gamePattern = [];
const userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  var audio = new Audio("sounds/" + userChosenColor + ".mp3");
  audio.play();
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  //1. Use jQuery to select the button with the same id as randomChosenColor

  //2. jQuery to animate a flash to the button selected
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  //3. use JS to play sound
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
