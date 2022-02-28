const sides = [3,4,5,6,7,8,16];
const drawers = [];
let counter = 0;
let padding = 40;
let spacing = 90;

function setup() {
    const canvasDiv = document.getElementById('canvas-wrapper');
    cWidth = canvasDiv.offsetWidth;
    cHeight = canvasDiv.offsetHeight;
    canvas = createCanvas(cWidth, cHeight);
    canvas.parent('canvas-wrapper');
    strokeWeight(2);
    stroke(0);

    for(let i = 0; i < (cWidth - (2*padding)); i+=spacing){
        for(let j = 0; j < (cHeight - (2*padding)); j+=spacing){
            drawers.push(new Drawer(
                {
                    x: padding + j,
                    y: padding + i,
                },
                2,
                sides[Math.floor(random(0,sides.length))]
            ));
        }
    }
}

function draw() {
    let isDone = true;

    drawers.forEach((drawer)=>{
        let oldPos = {...drawer.drawPos};
        if(!drawer.isDone()){
            drawer.step();
            isDone = false;
            if(counter != 0){
                line(oldPos.x, oldPos.y, drawer.drawPos.x, drawer.drawPos.y);
            }
        }
    });
    if(isDone){
        console.log('Done!');
        noLoop();
    }
    counter++;
}