x =0;
y = 0;
draw_circle = "";
draw_rect = "";
hieght = 900;
width = 600;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening Please Speek :";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    content  = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech Has Been recognition as :"+ content;
    if(content == "Circle"){
        x = Math.floor(Math.random()*hieght);
        y = Math.floor(Math.random()*width);
        document.getElementById("status").innerHTML = "started drawing circle";
        draw_circle = "set";
    
    }

    if(content == "Rectangle"){
        x = Math.floor(Math.random()*hieght);
        y = Math.floor(Math.random()*width);
        document.getElementById("status").innerHTML = "started drawing rectangle";
        draw_rect = "set";
    }
}

function setup(){
    canvas = createCanvas(900,600);
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random()*240);
        circle(x , y, radius);
        document,getElementById("status").innerHTML = "circle is drawn";
        draw_circle = "";
    }

    if(draw_rect == "set"){
        rect_h = Math.floor(Math.random()*hieght);
        rect_w = Math.floor(Math.random()*width);
        rect(x , y, rect_h, rect_w);
        document,getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
}

