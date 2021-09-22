var box;
function setup(){
createCanvas(400,400);
box = createSprite(200,200,40,40);
}
function draw(){
background("black");
if(keyIsDown(RIGHT_ARROW)){
box.x = box.x+5;
}



drawSprites();
}