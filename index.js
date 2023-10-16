for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnterHTML = this.innerHTML;
    makeSound(buttonInnterHTML);
    buttonAnimation(buttonInnterHTML);
  });
}

document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var bass = new Audio("./sounds/kick-bass.mp3");
      bass.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentyKey) {
  var activeButton = document.querySelector("." + currentyKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}
