const canvas = document.getElementById('drawing-board');
const ctx = canvas.getContext('2d');
const tool = document.getElementById('tool');

let lastx =0,lasty =0;
let corx,xory;
let drawing = false;


function stdraw(e){

    drawing=true;
    lastx = e.offsetX;
    lasty = e.offsetY;
}

function draw(e){
     if(!drawing) return;
    ctx.strokeStyle = document.getElementById('stroke').value;
ctx.lineWidth = document.getElementById('width').value;

     ctx.beginPath();
     ctx.moveTo(lastx,lasty);
     ctx.lineTo(e.offsetX,e.offsetY);
     ctx.stroke();

    lastx = e.offsetX;
    lasty = e.offsetY;
}

function stop(){
    drawing= false;
}

canvas.addEventListener('mousedown',stdraw);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',stop);
canvas.addEventListener('mouseleave',stop);