var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var box;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
    block1=createSprite (200,550,150,21)
block2=createSprite (400,550, 150,21)
block3=createSprite (600,550, 150,21)
block4=createSprite (800,550, 150,21)
block1.shapeColor= "red"
block2.shapeColor= "orange"
block3.shapeColor= "yellow"
block4.shapeColor= "green"

box=createSprite (500,200,50,50)
box.shapeColor= "white"
box.velocityY= 3
box.velocityX = 4
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites()
    box.bounceOff(edges)

    drawSprites()

    if(block1.isTouching(box)){
box.shapeColor="red"
    }
    
if(block2.isTouching(box)){
box.shapeColor="orange"

if(block3.isTouching(box)){
    box.shapeColor="yellow"
     }
     if(block4.isTouching(box)){
        box.shapeColor="green"
         }
        
    
 }


    //add condition to check if box touching surface and make it box
}
