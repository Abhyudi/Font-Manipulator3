nosex = 0;
nosey = 0;
diff = 0;
rightwristx = 0;
leftwristx = 0; 
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelloded);
    poseNet.on('pose',gotposes);

}

function modelloded()
{
console.log('posenet is initilized');
}

function draw()
{
    background('#969A97');
    textSize(diff);
    fill("#FFE787");
    text('Abhyudit',50,400);
 }

 function gotposes(results)
 {
    if(results.length > 0)
    {
        console.log(results);
          leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        console.log("leftwristx = " + leftwristx + "rightwristx = " + rightwristx);  
        diff = floor(leftwristx - rightwristx);
    }
 }



 