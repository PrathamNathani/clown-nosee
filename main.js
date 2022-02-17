var nose_x=0;
var nose_y=0;

function preload(){
 clown_nose = loadImage("https://i.postimg.cc/0QRPfDm1/114-1147898-clown-nose-png-clip-art-clown-nose-transparent.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);

}

function draw(){
    image(video,0,0,300,300);
    // fill("red");
    // stroke("black");
    // circle(nose_x,nose_y,30);
    image(clown_nose,nose_x,nose_y,30,30);
}
function take_snapshot(){
    save("selfie,clown,nose,2o.png");    
  }
function modelLoaded(){
console.log("Pose Net Model Loaded");
}
function gotposes(result){
    if(result.length>0){
        console.log(result);
        nose_x=result[0].pose.nose.x-200;
        nose_y=result[0].pose.nose.y-110;
        console.log(" X Position Of Nose: " + nose_x);
        console.log(" Y Position Of Nose: " + nose_y);     
    }
}
