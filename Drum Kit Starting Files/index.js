for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // the object contains the whole html element
    // this.style.color = "white";
    let buttonText = this.innerHTML
    playSound(buttonText);
    buttonAnimation(buttonText);
  });
}

// Call back function as this function is called with a KeyBoardPressedEvent
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
})

function playSound(buttonPressed) {
  let audio
  switch (buttonPressed) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;

    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;

    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default: console.log(buttonText)
  }
  audio.play();
}

function buttonAnimation (buttonText) {
  document.querySelector("." + buttonText).classList.add("pressed")

  setTimeout(function () {
    document.querySelector("." + buttonText).classList.remove("pressed")
  }, 100);
}

// For keyboard press events, we need to use keydown event, keypress is deprecated
// the event needs to be added on the document and not on the html element


// Higher Order Functions as they take name of a function as the argument -< handleClick
// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
//
// function handleClick () {
//   alert("w Clicked")
// }
//
// document.querySelectorAll("button")[1].addEventListener("click", function () {
//   alert("a Clicked")
// });
//
// document.querySelectorAll("button")[2].addEventListener("click", function () {
//   alert("s Clicked")
// });
//
// document.querySelectorAll("button")[3].addEventListener("click", function () {
//   alert("d Clicked")
// });
//
// document.querySelectorAll("button")[4].addEventListener("click", function () {
//   alert("j Clicked")
// });
//
// document.querySelectorAll("button")[5].addEventListener("click", function () {
//   alert("k Clicked")
// });
//
// document.querySelectorAll("button")[6].addEventListener("click", function () {
//   alert("l Clicked")
// });
