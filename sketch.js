var database;
var gameState=0
var playerCount=0
var allPlayers;
var car1,car2,car3,car4,cars
function preload(){
  car1ima=loadImage("images/car1.png")
  car2ima=loadImage("images/car2.png")
  car3ima=loadImage("images/car3.png")
  car4ima=loadImage("images/car4.png")
  trackima=loadImage("images/track.jpg")
  
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth,windowHeight);
form=new Form()
  form.display()
player=new Player()
game=new Game()
game.getState()
player.getCount()
car1=createSprite(200,400)
car1.addImage(car1ima)
car2=createSprite(400,400)
car2.addImage(car2ima)
car3=createSprite(600,400)
car3.addImage(car3ima)
car4=createSprite(800,400)
car4.addImage(car4ima)
cars=[car1,car2,car3,car4]
}
function draw (){
  if(playerCount==4&&gameState==0){
    gameState=1
  }
  if(gameState==1){
    game.play()
  }
  if(player.distance>5299){
    gameState=2
  }
}


























