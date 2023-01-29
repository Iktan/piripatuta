x = 0;
y = 0;

draw_capybara = "capybara.avif";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "te estoy escuchando no te escondas";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "ya te reconozi: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_capybara == "set")
  {
    document.getElementById("status").innerHTML = to_number + " capybara drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
