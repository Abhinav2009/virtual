//Create variables here
var dog, happyDog;
var database;
var Foods, foodStock;
function preload()
{
	//load images here


}

function setup() {
	createCanvas(500, 500);
  Dog = new dog(44, 55, 40, 50);

}


function draw() {  
background(46, 139, 87);
dog.display();



if(KeyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dogHappy);

}

drawSprites();
  //add styles here
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x,
  })
}
}



