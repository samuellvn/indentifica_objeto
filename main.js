var canvas;
var imagem;

function preload(){
    imagem=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(imagem, 0, 0, 640, 420);
    fill("red");
    text("cachorro", 45, 75);
    noFill();
    stroke("yellow");
    rect(30, 60, 450, 350);
}