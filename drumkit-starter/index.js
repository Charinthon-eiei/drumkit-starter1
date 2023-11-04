// alert("Hello World!");


//for (var i = 0; document.querySelectorAll(".drum").length ; i++ ) {

  //document.querySelectorAll(".drum")[i].addEventListener("click",function () {
   
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();

   // console.log(this.innerHTML)

  // if (this.innerHTML==="w") {
    //var audio = new Audio('sounds/tom-1.mp3');
    //audio.play();
   //}


 // } );
//}

// document.querySelector("button").addEventListener("click", handleClick);
document.addEventListener("keydown", function(event) {
  playSound(event.key);
});

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
  });
}

function playSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    default:
      // Do nothing if an unsupported key is pressed.
  }
}
//document.querySelector("button").addEventListener("click", () => alert("ฉันถูกกด"));


