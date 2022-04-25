//get start button, audio and inner circle
var button = document.getElementById("start");
var music = document.getElementById("music");
const innercircle = document.querySelector(".innercircle");

//called when "start" button is pressed
function togglebutton(){
  //toggle button between "start" and "pause"
  button.classList.toggle("inactivebutton");

  //if "start" button is pressed
  if (button.classList.contains("inactivebutton")){
    //add animation and unpause it
    innercircle.classList.remove("pause");
    innercircle.classList.add("circleanimation");
    //change text
    button.innerHTML = "Pause";
    //play music
    music.play();
  //if "pause" button is pressed
  } else {
    //change text
    button.innerHTML = "Start";
    //pause music
    music.pause();
    //pause animation
    innercircle.classList.add("pause");
  }
}

//restart button function
function restart(){
  //change text back to "start"
  button.innerHTML = "Start";
  //remove inactive button class
  button.classList.remove("inactivebutton");
  //stop animation
  innercircle.classList.remove("circleanimation");
  //restart music
  music.currentTime = 0;
  //pause music
  music.pause();
}