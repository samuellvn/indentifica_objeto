var canvas;
var imagem;
var object_detector;
var Status="";
var objects=[];

function preload(){
    imagem=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    object_detector=ml5.objectDetector("cocossd", model_loaded);
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
        objects=results;
    }
}
function draw(){
    image(imagem, 0, 0, 640, 420);
    if(Status!=""){
        for(var o=0; o<objects.length; o++){
            document.getElementById("status").innerHTML="status: objeto detectado";
            var precisao=floor(objects[o].confidence*100);
            fill("blue");
            text(objects[o].label+" "+precisao+"%", objects[o].x, objects[o].y);
            noFill();
            stroke("blue");
            rect(objects[o].x, objects[o].y, objects[o].width,  objects[o].height);
        }
    }
}
