
function setup() {
    canvas= createCanvas(2000,1500)
    canvas.position(0,0)

}

function draw() {
    
    ellipse(mouseX,mouseY,mouseX,mouseY);
    fill(mouseX * 0.5,mouseY*0.5 ,mouseX*.5);
}