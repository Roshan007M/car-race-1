
var hypnoticBall,database;
var position;
function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
    hyponeticBall = createSprite(200,200,10,10);
    hyponeticBall.shapeColor = "red";
    var hyponeticBallPosition = database.ref("ball/position"); 
    hyponeticBallPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        'x':position.x+x,
        'y':position.y+y
    })
}
function readPosition(data){
    position=data.val();
    console.log(position.x);
    hyponeticBall.x = position.x;
    hyponeticBall.y = position.y;
}
function showError(){
    console.log("error in writing in database");
}