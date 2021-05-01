canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
car1height=120;
car1width=70;
car1x=10;
car1y=10;
car1image="car1.jpg";
backgroundimage="racing track.jpg";


car2height=120;
car2width=70;
car2x=10;
car2y=100;
car2image="car2.jpg";

function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=backgroundimage;

    car1_imagetag=new Image();
    car1_imagetag.onload=uploadCar1;
    car1_imagetag.src=carimage;

    car2_imagetag=new Image();
    car2_imagetag.onload=uploadCar2;
    car2_imagetag.src=carimage;
}
function uploadBackground(){
 ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);   
}
function uploadCar1(){
    ctx.drawImage(car1_imagetag,car1x,car1y,car1width,car1height);
}

function uploadCar2(){
    ctx.drawImage(car2_imagetag,car2x,car2y,car2width,car2height);
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypress=e.keyCode;
console.log(keypress);
if(keypress=='38'){
    car1up();
    console.log("up arrow key presed");
}
if(keypress=='40'){
    car1down();
    console.log("down arrow key presed");
}
if(keypress=='37'){
    car1left();
    console.log("left arrow key presed");
}
if(keypress=='39'){
    car1right();
    console.log("right arrow key presed");
}




if(keypress=='87'){
    car2up();
    console.log("w key pressed");
}
if(keypress=='83'){
    car2down();
    console.log("s key pressed");
}
if(keypress=='65'){
    car2left();
    console.log("a key pressed");
}
if(keypress=='68'){
    car2right();
    console.log("d key pressed");
}
}

