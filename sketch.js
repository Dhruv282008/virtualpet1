//Create variables here
var dog, happyDog, database, foodS, foodStock, dogimg;
function preload()
{
	//load images here
  dogimg = loadImage("images/dogImg.png")
  happyDog = loadAnimation("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20)
  dog.addImage("dog",dogimg)
  dog.scale = 0.2
  database = firebase.database()
  foodStock = database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  //add styles here
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.changeAnimation("happy",happyDog)
    console.log("....")
  }

  text("Remaining Amount of Food"+foodS, 250, 450)
}

function readStock(data){
  foodS = data.val()
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
