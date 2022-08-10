var x = 0;
var y = 0; var content;
var draw_circle = "";
var draw_rect = "";
var SP = window.webkitSpeechRecognition;
var recognition = new window.webkitSpeechRecognition;
function getcommand() {
    document.getElementById("status").innerHTML = 'System is listening please speak';
    recognition.start();
}
recognition.onresult = function(event)
{
 console.log(event); 

content = event.results[0][0].transcript;
saytext(content);
document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
if(content =="Circle" || content == "circle")
      {
x = Math.floor(Math.random() * 900);
y = Math.floor(Math.random() * 600);
document.getElementById("status").innerHTML = "Started drawing circle "; 
draw_circle = "set";
      }
if(content =="Rectangle" || content == "rectangle")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle "; 
        draw_rect = "set";
      }
    }
function setup() {
    canvas = createCanvas(900,600);
}
function draw() {
    if (draw_circle == "set") {
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
    }
    if (draw_rect == "set") {
        rect(x,y,70,50)
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
    }
}
function saytext(text) {
    const sound = new SpeechSynthesisUtterance(text);
    sound.rate = 1;
    speechSynthesis.speak(sound);
}