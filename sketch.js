function setup() {
  createCanvas(450, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#87ED7C");
  } else {
    background("rgb(102,118,243)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🔥", xJogador1, 100);
  text("❄️", xJogador2, 200);
  text("💧", xJogador3, 300);
  text("🌫️", xJogador4, 400);
}

function desenhaLinhaDeChegada() {
  rect(400, 0, 10, 400);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("fogo ganhou!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("gelo ganhou!", 50, 200);
    noLoop();}
   if (xJogador3 > 350) {
    text("água ganhou!", 50, 200);
    noLoop();
     if (xJogador4 > 350) {
    text("vento ganhou!", 50, 200);
    noLoop();
     }
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "l") {
    xJogador2 += random(20);
  }
  if (key == "f") {
    xJogador3 += random(20);
  }
  if (key == "h") {
    xJogador4 += random(20);
  }
}
