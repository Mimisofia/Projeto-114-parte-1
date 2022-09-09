eyesX=0;
eyesY=0;
function preload() {
  clownEyes = loadImage('https://i.postimg.cc/JhCypSw2/kisspng-sunglasses-drawing-vector-hand-painted-sunglasses-5a88e25b685f29-5898265415189202834275-remo.png');
}

function setup(){
 canvas = createCanvas(300, 300);
 canvas.center();
 video= createCapture(VIDEO);
 video.size(300, 300);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log('PoseNet foi inicializado');
}

function gotPoses(results){
 if(results.length > 0)
 {
  console.log(results);
  eyesX = results[0].pose.eyes.x-48;
  eyesY = results[0].pose.eyes.y-75;
 }
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(clownEyes, eyesX, eyesY, 110, 100);
}

function takeSnapshot(){
  save('myImage.png');
}
