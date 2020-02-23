var randomnumber=0;
var randomarray=[];
var clickarray=[];
var numberofclicks=0;
var color="";
var level=1;
var k=0;
var started="false"

$(document).keypress(function() {
  if (started === "false") {
    $("h1").text("Level 1");
    started="true";
    gameplay();
  }
});

$(".btn").click(function(event) {
    mouseclick($(this).attr("id"));
});

function gameplay() {

  randomnumber=Math.floor((Math.random()*4)+1);
  randomarray.push(randomnumber);

  if (randomnumber === 1) {
    playanimation("#green");
    playsound("green");
    console.log("green");
  } else if (randomnumber === 2) {
    playanimation("#red");
    playsound("red");
    console.log("red");
  } else if (randomnumber === 3) {
    playanimation("#yellow");
    playsound("yellow");
    console.log("yellow");
  } else if (randomnumber === 4) {
    playanimation("#blue");
    playsound("blue");
    console.log("blue");
  }
}

function playanimation(color1) {
  $(color1).addClass("pressed");
  setTimeout(function() {
  $(color1).removeClass("pressed");
  }, 100);
}

function playsound(color1) {
  sounds="sounds/"+color1+".mp3";
  var sound = new Audio(sounds);
        sound.play()
}

function mouseclick(color) {
    numberofclicks++;
    if (color === "green") {
        clickarray.push(1);
        playanimation("#green");
        playsound("green");
    } else if (color === "red") {
        clickarray.push(2);
        playanimation("#red");
        playsound("red");
    } else if (color === "yellow") {
        clickarray.push(3);
        playanimation("#yellow");
        playsound("yellow");
    } else if (color === "blue") {
        clickarray.push(4);
        playanimation("#blue");
        playsound("blue");
    }

    if (randomarray[k] !== clickarray[k]) {
      clickarray=[];
      randomarray=[];
      level=1;
      k=0;
      started="false"
      numberofclicks=0;
      $("h1").text("Game Over, press any key to start");
      $("body").addClass("game-over");
      setTimeout(function() {
      $("body").removeClass("game-over");
      }, 500);
      var gosound = new Audio("sounds/wrong.mp3");
      gosound.play();

    } else if (numberofclicks===level) {
      console.log("level-complete");
      numberofclicks=0;
      level++;
      k=0;
      $("h1").text("Level "+level);
      setTimeout(function(){ gameplay(); }, 1000);
      clickarray=[];
    } else {
      k++;
      }
}
