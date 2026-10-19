let angle = 0;
let x1;
let x2;
let x3;
let x4;
let x = 400;
let y = 250;
let radius = 150;
let mB = [];
let nB = [];
let speedB = [];
let sizeB = [];
let bubble = [];
let dream = [];
let cx;
let cy;
let dia;
let p;
let part = [];
let xp = [];
let yp = [];
let speedXp = [];
let speedYp = [];
let sizeP = [];
let dP;
let dC;
let time = 600;
let change = false;
let r;
let g;
let b;
let waveN;
let waveM;
let family = [];
let speedF = [];
let mF = [];
let nF = [];
let t;
let sizeF = [];
let ray = [];
let s = 20;
let textX;
let textY;

function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);
  //dreamData
  cx = random(200, 600);
  cy = random(100, 400);
  dia = 20;
  //partData
  resetPart();
  //family
  for (let i = 0; i < 5; i++) {
    ray.push({
      mF: random(800, 1500),
      nF: random(50, 450),
      speedF: random(1, 5),
      sizeF: random(0.5, 1),
    });
  }
}

function draw() {
  background(5, 30, 55);
  drawFamily();
  drawDream();
  if (dC <= dia) {
    dia = dia + 5;
    if (dia <= 1350) {
      s = s + 1;
      if (s >= 140) {
        s = 20;
      }
      textSize(s);
      fill(255)
      stroke(255);
      strokeWeight(5);
      textX = frameCount % 60 
      textY = frameCount % 60
      text("z", mouseX + textX, mouseY - textY);
    }
  }
  if (dia >= 1350) {
    dia = 1350;
  }
  //particle
  if (dia >= 1350 && change == false) {
    time = time - 1;
    drawPart();
    if (time > 0) {
      drawBlue();
    } else {
      resetPart();
      time = 600;
      dia = 20;
      drawDream();
      drawRay();
    }
  }

  //bubble
  if (dia < 1350) {
    if (mouseIsPressed) {
      for (let i = 0; i < 1; i++) {
        bubble.push({
          sizeB: random(10, 50),
          mB: x,
          nB: y,
          speedB: random(-3, 3),
        });
      }
      for (let i = 0; i < bubble.length; i++) {
        let b = bubble[i];
        b.mB = b.mB - b.speedB;
        b.nB = b.nB + b.speedB;
        noFill();
        stroke(255, 160);
        strokeWeight(1.5);
        //rotate(angle)
        circle(b.mB, b.nB, b.sizeB);
      }
      drawRotateBlue();
    } else {
      bubble = [];
      drawRay();
    }
  }
}

function drawDream() {
  dC = dist(mouseX, mouseY, cx, cy);
  fill(120, 150, 220);
  noStroke();
  circle(cx, cy, dia);
}

function drawRotateBlue() {
  //旋转
  angle = angle + 1;
  x = mouseX + cos(angle) * radius;
  y = mouseY + sin(angle) * radius;
  translate(x, y);
  rotate(-angle);
  if (angle > 360) {
    angle = 0;
  }
  //鬼畜尾巴
  stroke(255);
  strokeWeight(5);
  x1 = sin(frameCount * 10) * 20;
  x2 = cos(frameCount * 10 + 10) * 15;
  x3 = cos(frameCount * 10 - 20) * 15;
  x4 = cos(frameCount * 10 + 60) * 20;
  line(0, 70, x1, 120);
  line(x1, 120, x2, 160);
  line(x2, 160, x3, 200);
  line(x3, 200, x4, 250);
  //body part
  noStroke();
  fill(204, 255, 255);
  beginShape();
  splineVertex(+0, -80);
  splineVertex(+100, +0);
  splineVertex(+80, +60);
  splineVertex(+20, +100);
  splineVertex(+0, +80);
  splineVertex(-20, +100);
  splineVertex(-80, +60);
  splineVertex(-100, +0);
  endShape(CLOSE);
  stroke(0, 255, 255);
  strokeWeight(3);
  line(-25, -40, -15, -45);
  line(+25, -40, +15, -45);
  fill(204, 255, 255);
  stroke(0, 255, 255);
  arc(-5, -30, 10, 5, 0, 180);
  arc(+5, -30, 10, 5, 0, 180);
}

function drawBlue() {
  push();
  translate(mouseX, mouseY);
  //鬼畜尾巴
  stroke(255, 100);
  strokeWeight(5);
  x1 = sin(frameCount * 10) * 20;
  x2 = cos(frameCount * 10 + 10) * 15;
  x3 = cos(frameCount * 10 - 20) * 15;
  x4 = cos(frameCount * 10 + 60) * 20;
  line(0, 70, x1, 120);
  line(x1, 120, x2, 160);
  line(x2, 160, x3, 200);
  line(x3, 200, x4, 250);
  //body part
  noStroke();
  fill(204, 255, 255, 150);
  beginShape();
  splineVertex(+0, -80);
  splineVertex(+100, +0);
  splineVertex(+80, +60);
  splineVertex(+20, +100);
  splineVertex(+0, +80);
  splineVertex(-20, +100);
  splineVertex(-80, +60);
  splineVertex(-100, +0);
  endShape(CLOSE);
  stroke(0, 255, 255);
  strokeWeight(3);
  line(-25, -40, -15, -45);
  line(+25, -40, +15, -45);
  fill(204, 255, 255);
  stroke(0, 255, 255);
  arc(-5, -30, 10, 5, 0, 180);
  arc(+5, -30, 10, 5, 0, 180);
  pop();
}

function drawRay() {
  push();
  t = +sin(frameCount * 2) * 120 + 40;
  translate(mouseX, mouseY);
  //尾巴
  strokeWeight(3);
  stroke(255);
  line(+150, +70, +450, +70);
  noStroke();
  //灰色翅膀
  fill(102, 255, 255, 180);
  beginShape();
  splineVertex(-150, +60);
  splineVertex(-80, t);
  splineVertex(0, +50);
  endShape(CLOSE);
  //身体
  fill(204, 255, 255);
  beginShape();
  splineVertex(0, +30);
  splineVertex(+80, +50);
  splineVertex(+200, +70);
  splineVertex(-100, +80);
  splineVertex(-180, +60);
  splineVertex(-80, +30);
  endShape(CLOSE);
  //白色翅膀
  t = +sin(frameCount * 2) * 120 + 40;
  beginShape();
  splineVertex(-120, +60);
  splineVertex(0, t);
  splineVertex(+80, +60);
  endShape(CLOSE);
  pop();
}

//function drawWave() {
//color
//
function drawFamily() {
  for (let i = 0; i < 5; i++) {
    ray[i].mF = ray[i].mF - ray[i].speedF;
    if (ray[i].mF < -600) {
      ray[i].mF = 1000;
    } else {
      push();
      translate(ray[i].mF, ray[i].nF);
      t = +sin(frameCount * 2) * 120 + 40;
      scale(ray[i].sizeF);
      noStroke();
      //灰色翅膀
      fill(178, 178, 178, 100);
      beginShape();
      splineVertex(-150, +60);
      splineVertex(-80, t);
      splineVertex(0, +50);
      endShape(CLOSE);
      //身体
      fill(255);
      beginShape();
      splineVertex(0, +30);
      splineVertex(+80, +50);
      splineVertex(+200, +70);
      splineVertex(-100, +80);
      splineVertex(-180, +60);
      splineVertex(-80, +30);
      endShape(CLOSE);
      //白色翅膀
      fill(255);
      t = +sin(frameCount * 2) * 120 + 40;
      beginShape();
      splineVertex(-120, +60);
      splineVertex(0, t);
      splineVertex(+80, +60);
      endShape(CLOSE);
      //尾巴
      strokeWeight(3);
      stroke(255, 150);
      line(+150, +70, +450, +70);
      pop();
    }
  }
}
function resetPart() {
  part = [];

  for (let p = 0; p < 4000; p++) {
    part.push({
      xp: random(0, 800),
      yp: random(0, 500),
      speedXp: random(-0.2, 0.2),
      speedYp: random(-0.2, 0.2),
      sizeP: random(2, 5),
    });
  }
}
function drawPart() {
  for (let p = 0; p < part.length; p++) {
    let pp = part[p];
    pp.xp = pp.xp + pp.speedXp;
    pp.yp = pp.yp + pp.speedYp;
    dP = dist(mouseX, mouseY, pp.xp, pp.yp);
    if (dP < 60 && dP > 0) {
      pp.speedXp += ((pp.xp - mouseX) / dP) * 0.1;
      pp.speedYp += ((pp.yp - mouseY) / dP) * 0.1;
      if (dP > 150) {
        pp.speedXp = -pp.speedXp;
        pp.speedYp = -pp.speedYp;
      }
    }
    pp.speedXp *= 0.999;
    pp.speedYp *= 0.999;
    noStroke();
    fill(255);
    circle(pp.xp, pp.yp, pp.sizeP);
  }
}
