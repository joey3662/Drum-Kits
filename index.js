var numOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrum; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    playSound(this.innerHTML);
    flash(this.innerHTML);
  })
}
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  flash(event.key);
})

function playSound(btn) {
  switch (btn) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

function flash(eventKey) {
  var currentBtn = document.querySelector("." + eventKey);
  currentBtn.classList.add("pressed");
  setTimeout(function() {
    currentBtn.classList.remove("pressed");
  }, 200);
}
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
