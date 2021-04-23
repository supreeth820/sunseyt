const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;
var h;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    

    Engine.update(engine);

    noStroke();
    textSize(35)
    fill("white")
    text("time:" + h + "PM", 50,50)


}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    
    var dt = responseJSON.datetime
    
    h = dt.slice(11,13)
    
    console.log(h)
    
    if(h <= 04 && h <=06){
        bg = "sunrise1.png";
    } 
    else if(h>=06 && h==08) {
        bg = "sunrise2.png";
    }
    else if(h>=8 && h<=10){
        bg = "sunrise3.png";
    }
    else if(h>= 10 && h<=12){
        bg = "sunrise4.png";
    }
    else if(h>= 12 && h<=14){
        bg = "sunrise5.png";
    }
    else if(h>= 14 && h<=16){
        bg = "sunrise6.png";
    }
    else if(h>= 16 && h<=18){
        bg = "sunset7.png";
    }
    else if(h>= 18 && h<=20){
        bg = "sunset8.png";
    }
    else if(h>= 20 && h<=23){
        bg = "sunset7.png";
    }
    else if(h>=23 && h==0){
        bg = "sunset10.png"
    }
    else if(h==0 && h<=03){
        bg = "sunset1.png"
    }
    else {
        bg = "sunset12.png"
    }
     backgroundImg = loadImage(bg)
     console.log(bg)
     
}
