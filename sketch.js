// global variables
var ball; var ball2; var rand;

/*var array1 = [10,20,30,40,50];
console.log(array1)
 var array2 = [100, 200 , "name", true];
 console.log(array2);
 console.log(array2[2])

 array2.push("javascript");
 console.log(array2);

 array2.pop();
 console.log(array2);*/


var a = 10; //number
var name = "Student" // string
var bool = true; //boolean
var b = 10; //undefined
console.log(b)

var c = null;
console.log(c)

const obj = {name : "name"}





function setup() {
  createCanvas(600, 600);
  ball = createSprite(300,300,30,30);
 

  if(a == b){
    console.log(" a is equal to b")
    ball.shapeColor="red"
  } 
  else if(a<b){
    ball.shapeColor="green"
    console.log(" a is less to b")
  }

}

function draw() {
  background("black");
  //console.log("hello javaScript");

  for(var i = 20; i<600;i+=50){
    ball2=createSprite(200,i,20,20);
    ball2.shapeColor="yellow"
  }

  for(var i = 20; i<600;i+=50){
    ball2=createSprite(400,i,20,20);
    ball2.shapeColor="yellow"
  }
  rand = Math.round(random(1,3))
  console.log(rand)
  switch(rand){
    case 1: console.log("rand number is 1");
    break;
    case 2: console.log("rand number is 2");
    break;
    case 3 : console.log("rand number is 3");
    break;
  }

  

  drawSprites();
}

