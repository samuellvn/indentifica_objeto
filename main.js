var canvas;
var imagem;
var object_detector;
var Status="";
var objects=[];
var video;

function preload(){
    imagem=loadImage("dog_cat.jpg")
}
function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function model_loaded(){
    console.log("modelo carregado");
    Status=true;
    object_detector.detect(video, got_results);
}
function got_results(error, results){
    if(error==true){
        console.error(error);
    }   else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(video, 0, 0, 380, 380);
    if(Status!=" "){
        for(var o=0; o<objects.length; o++){
            document.getElementById("status").innerHTML="status: objeto detectado";
            document.getElementById("numero").innerHTML="quantidade de objetos detectados: "+objects.length;
            var precisao=floor(objects[o].confidence*100);
            fill("blue");
            text(objects[o].label+" "+precisao+"%", objects[o].x, objects[o].y);
            noFill();
            stroke("blue");
            rect(objects[o].x, objects[o].y, objects[o].width,  objects[o].height);
        }
    }
}
function iniciar(){
    object_detector=ml5.objectDetector("cocossd", model_loaded);
    document.getElementById("status").innerHTML="status: detectando objetos";
}
