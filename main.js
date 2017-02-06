var display = document.getElementById("display");
var bG = document.getElementById("bG");


function clock() {
  var time = new Date();
  var hours = time.getHours().toString(16);
  var minutes = time.getMinutes().toString(16);
  var seconds = time.getSeconds().toString(16);


var timer =  "#" + ("0" + hours).slice(-2) + ("0" + minutes).slice(-2) + ("0" + seconds).slice(-2);
var chameleonBG = "#" + hours + minutes + seconds;

display.innerHTML = timer;
bG.style.backgroundColor = chameleonBG;
}

setInterval(clock, 1000);

console.log(clock());


//setInterval(clock(), 1000);
