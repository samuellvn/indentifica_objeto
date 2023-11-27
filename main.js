var canvas;
var imagem;
var object_detector;
var Status="";

function preload(){
    imagem=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    object_detector=ml5.object_detector("cocossd", model_loaded);
    document.getElementById("status").innerHTML="status: detectando objetos";
}
function model_loaded(){
    console.log("modelo carregado");
    Status=true;
    object_detector.detect(imagem, got_results);
}
function got_results(error, results){
    if(error==true){
        console.error(error);
    }   else{
        console.log(results);
    }
}
function draw(){
    image(imagem, 0, 0, 640, 420);
    fill("red");
    text("cachorro", 45, 75);
    noFill();
    stroke("yellow");
    rect(30, 60, 450, 350);

    fill("blue");
    text("gato", 320, 120);
    noFill();
    stroke("blue");
    rect(300, 90, 270, 320);
}
