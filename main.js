img="";

function preload()
{
img = loadImage('dog_cat.jpg');
}

function setup()
{
canvas = createCanvas(640,420);
canvas.center();
}

function draw()
{
image(img,0,0,640,420);
fill("#FF0000");
stroke("#FF0000");
text("Dog 97%",50,70);
noFill();
rect(35,60,450,350);
}