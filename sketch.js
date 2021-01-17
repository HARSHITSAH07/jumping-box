var canvas,collision1,collision2,collision3,collision4;
var music,box;
var boundary1,boundary2,boundary3,boundary4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);


    collision1=createSprite(80,590,150,15);
    collision1.shapeColor="green";

    collision2=createSprite(720,590,150,15);
    collision2.shapeColor="red";

    collision3=createSprite(500,590,150,15);
    collision3.shapeColor="blue";

    collision4=createSprite(280,590,150,15);
    collision4.shapeColor="yellow";

    box=createSprite(0,0,50,50);
    box.shapeColor="white";
    box.velocityX=6;
    box.velocityY=6;

    boundary1=createSprite(0,0,2,1600);
    boundary1.shapeColor="black"
    boundary2=createSprite(0,0,1600,2);
    boundary2.shapeColor="black"
    boundary3=createSprite(800,800,2,1600);
    boundary3.shapeColor="black"
    boundary4=createSprite(800,600,1600,2);
    boundary4.shapeColor="black"

}

function draw() {
    background(169,169,169);
    //create edgeSprite

    createEdgeSprites();



    //add condition to check if box touching surface and make it box
    
    if(box.isTouching(collision1) && box.bounceOff(collision1)){

        box.shapeColor="green";
    }

    if(box.isTouching(collision2) && box.bounceOff(collision2)){

        box.shapeColor="red";
    }

    if(box.isTouching(collision3) && box.bounceOff(collision3)){

        box.shapeColor="blue";
    }

    if(box.isTouching(collision4) && box.bounceOff(collision4)){

        box.shapeColor="yellow";
    }


    box.bounceOff(boundary1);
    box.bounceOff(boundary2);
    box.bounceOff(boundary3);
    box.bounceOff(boundary4);
    
    drawSprites();
}
