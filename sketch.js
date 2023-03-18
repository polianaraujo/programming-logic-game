var tela = 1;
var menulargura = 200;
var menualtura = 50;
var xMenu = 150;
var yMenu1 = 265;
var yMenu2 = 325;
var yMenu3 = 385;

var yMenuF1_1 = 205;
var yMenuF1_2 = 265;
var yMenuF1_3 = 325;
var yMenuF1_4 = 385;

var larguraESC = 60;
var alturaESC = 30;
var xMenuESC = 8;
var yMenuESC = 13;

var larguraF1 = 50;
var alturaF1 = 50;
var xF1_FMA = 85;
var xF2_FMA = 155;
var xF3_FMA = 225;
var xF4_FMA = 295;
var xF5_FMA = 365;
var yMenuF1_F1 = 175;
var yMenuF2_F1 = 285;
var yMenuF3_F1 = 395;



var imagemCriador;

function preload(){
  imagemCriador = loadImage("foto_criador.jpeg")
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  textStyle(NORMAL);
  // Tela do Menu
  if(tela == 1){
    background(240,275,235);
    stroke(25,25,112);
    line(0, 215, 500, 215);
    fill(0,0,139);
    textSize(40);
    textFont('Georgia');
    text("Aprendendo Inglês", 150, 80, 220);
    
    textAlign(CENTER);
    textSize(26);
    //Níveis
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenu1 && mouseY < yMenu1 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenu1, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 2;
      }
      
    }
    
    fill(25,25,112);
    noStroke();
    text("Iniciar", 250, 300);
    
    //Instruções
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenu2 && mouseY < yMenu2 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenu2, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 4;
      }
      
    }
    
    fill(25,25,112);
    noStroke();
    text("Instruções", 250, 360);
    
    //Créditos do jogo
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenu3 && mouseY < yMenu3 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenu3, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 5;
      }
      
    }
    
    fill(25,25,112);
    noStroke();
    text("Créditos", 250, 420);
    
  }
  
  
  
  
  //Níveis
  else if(tela == 2){
    background(240,275,235);
    fill(0,0,139);
    textSize(38);
    textFont('Georgia');
    text("Níveis", 185, 35, 205);
    stroke(25,25,112);
    line(0, 110, 500, 110);
    
    //Níveis do Fácil
    //Fácil - Nível 01
    if(mouseX > xF1_FMA && mouseX < xF1_FMA + larguraF1 && mouseY > yMenuF1_F1 && mouseY < yMenuF1_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF1_FMA, yMenuF1_F1, larguraF1, alturaF1, 15);
      
      if(mouseIsPressed){
        tela = 3;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("01", 95, 190, 250, 240);
    
    //Fácil - Nível 02
    if(mouseX > xF2_FMA && mouseX < xF2_FMA + larguraF1 && mouseY > yMenuF1_F1 && mouseY < yMenuF1_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF2_FMA, yMenuF1_F1, larguraF1, alturaF1, 85);
      
      if(mouseIsPressed){
        tela = 6;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("02", 165, 190, 250, 300);
    
    //Fácil - Nível 03
    if(mouseX > xF3_FMA && mouseX < xF3_FMA + larguraF1 && mouseY > yMenuF1_F1 && mouseY < yMenuF1_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF3_FMA, yMenuF1_F1, larguraF1, alturaF1, 155);
      
      if(mouseIsPressed){
        tela = 7;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("03", 235, 190, 250, 300);
    
    //Fácil - Nível 04
    if(mouseX > xF4_FMA && mouseX < xF4_FMA + larguraF1 && mouseY > yMenuF1_F1 && mouseY < yMenuF1_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF4_FMA, yMenuF1_F1, larguraF1, alturaF1, 225);
      
      if(mouseIsPressed){
        tela = 8;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("04", 305, 190, 250, 300);
    
    //Fácil - Nível 05
    if(mouseX > xF5_FMA && mouseX < xF5_FMA + larguraF1 && mouseY > yMenuF1_F1 && mouseY < yMenuF1_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF5_FMA, yMenuF1_F1, larguraF1, alturaF1, 365);
      
      if(mouseIsPressed){
        tela = 9;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("05", 375, 190, 250, 300);
    
    //Níveis do Médio
    //Médio - Nível 01
    if(mouseX > xF1_FMA && mouseX < xF1_FMA + larguraF1 && mouseY > yMenuF2_F1 && mouseY < yMenuF2_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF1_FMA, yMenuF2_F1, larguraF1, alturaF1, 15);
      
      if(mouseIsPressed){
        tela = 10;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("01", 95, 300, 250, 300);
    
    //Médio - Nível 02
    if(mouseX > xF2_FMA && mouseX < xF2_FMA + larguraF1 && mouseY > yMenuF2_F1 && mouseY < yMenuF2_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF2_FMA, yMenuF2_F1, larguraF1, alturaF1, 85);
      
      if(mouseIsPressed){
        tela = 10;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("02", 165, 300, 250, 300);
    
    //Médio - Nível 03
    if(mouseX > xF3_FMA && mouseX < xF3_FMA + larguraF1 && mouseY > yMenuF2_F1 && mouseY < yMenuF2_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF3_FMA, yMenuF2_F1, larguraF1, alturaF1, 155);
      
      if(mouseIsPressed){
        tela = 11;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("03", 235, 300, 250, 300);
    
    //Médio - Nível 04
    if(mouseX > xF4_FMA && mouseX < xF4_FMA + larguraF1 && mouseY > yMenuF2_F1 && mouseY < yMenuF2_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF4_FMA, yMenuF2_F1, larguraF1, alturaF1, 225);
      
      if(mouseIsPressed){
        tela = 11;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("04", 305, 300, 250, 300);
    
    //Médio - Nível 05
    if(mouseX > xF5_FMA && mouseX < xF5_FMA + larguraF1 && mouseY > yMenuF2_F1 && mouseY < yMenuF2_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF5_FMA, yMenuF2_F1, larguraF1, alturaF1, 365);
      
      if(mouseIsPressed){
        tela = 12;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("05", 375, 300, 250, 300);
    
    //Níveis do Avançado
    //Avançado - Nível 01
    if(mouseX > xF1_FMA && mouseX < xF1_FMA + larguraF1 && mouseY > yMenuF3_F1 && mouseY < yMenuF3_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF1_FMA, yMenuF3_F1, larguraF1, alturaF1, 15);
      
      if(mouseIsPressed){
        tela = 13;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("01", 95, 410, 250, 300);
    
    //Avançado - Nível 02
    if(mouseX > xF2_FMA && mouseX < xF2_FMA + larguraF1 && mouseY > yMenuF3_F1 && mouseY < yMenuF3_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF2_FMA, yMenuF3_F1, larguraF1, alturaF1, 85);
      
      if(mouseIsPressed){
        tela = 14;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("02", 165, 410, 250, 300);
    
    //Avançado - Nível 03
    if(mouseX > xF3_FMA && mouseX < xF3_FMA + larguraF1 && mouseY > yMenuF3_F1 && mouseY < yMenuF3_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF3_FMA, yMenuF3_F1, larguraF1, alturaF1, 155);
      
      if(mouseIsPressed){
        tela = 15;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("03", 235, 410, 250, 300);
    
    //Avançado - Nível 04
    if(mouseX > xF4_FMA && mouseX < xF4_FMA + larguraF1 && mouseY > yMenuF3_F1 && mouseY < yMenuF3_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF4_FMA, yMenuF3_F1, larguraF1, alturaF1, 225);
      
      if(mouseIsPressed){
        tela = 16;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("04", 305, 410, 250, 300);
    
    //Avançado - Nível 05
    if(mouseX > xF5_FMA && mouseX < xF5_FMA + larguraF1 && mouseY > yMenuF3_F1 && mouseY < yMenuF3_F1 + alturaF1) {
      stroke(200);
      fill(220);
      rect(xF5_FMA, yMenuF3_F1, larguraF1, alturaF1, 365);
      
      if(mouseIsPressed){
        tela = 17;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(25);
    text("05", 375, 410, 250, 300);
    
    if(mouseX > xMenuESC && mouseX < xMenuESC + larguraESC && mouseY > yMenuESC && mouseY < yMenuESC + alturaESC) {
      stroke(200);
      fill(220);
      rect(xMenuESC, yMenuESC, larguraESC, alturaESC, 15);
      
      if(mouseIsPressed){
        tela = 1;
      }
    }
    textSize(15)
    fill(25,25,112);
    text("Menu", 20, 33);
    
    
  }
  
  
  
  
  
  // Jogo em ação - Fácil - Questão 1
  else if(tela == 3){
    background(240,275,235);
    textSize(25);
    textFont('Georgia')
    fill(25,25,112);
    text("Como se traduz para o inglês: 'Vermelho' ? ", 150, 50, 240);
    stroke(20);
    line(0, 150, 500, 150);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_1 && mouseY < yMenuF1_1 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_1, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 3;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Yellow", 210, 240);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_2 && mouseY < yMenuF1_2 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_2, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 3;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Pink", 215, 300);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_3 && mouseY < yMenuF1_3 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_3, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 3;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Black", 210, 360);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_4 && mouseY < yMenuF1_4 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_4, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 6;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Red", 220, 420);
    
    if(mouseX > xMenuESC && mouseX < xMenuESC + larguraESC && mouseY > yMenuESC && mouseY < yMenuESC + alturaESC) {
      stroke(200);
      fill(220);
      rect(xMenuESC, yMenuESC, larguraESC, alturaESC, 15);
      
      if(mouseIsPressed){
        tela = 1;
      }
    }
    textSize(15)
    fill(25,25,112);
    text("Menu", 20, 33);
    
    
  }
  // Jogo em ação - Fácil - Questão 02
  else if(tela == 6){
    background(240,275,235);
    textSize(25);
    textFont('Georgia')
    fill(25,25,112);
    text("Como se traduz para o inglês: 'Verde' ? ", 150, 50, 240);
    stroke(20);
    line(0, 150, 500, 150);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_1 && mouseY < yMenuF1_1 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_1, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 6;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Brown", 210, 240);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_2 && mouseY < yMenuF1_2 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_2, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 7;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Green", 215, 300);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_3 && mouseY < yMenuF1_3 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_3, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 6;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Pink", 210, 360);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_4 && mouseY < yMenuF1_4 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_4, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 6;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Gray", 220, 420);
    
    if(mouseX > xMenuESC && mouseX < xMenuESC + larguraESC && mouseY > yMenuESC && mouseY < yMenuESC + alturaESC) {
      stroke(200);
      fill(220);
      rect(xMenuESC, yMenuESC, larguraESC, alturaESC, 15);
      
      if(mouseIsPressed){
        tela = 1;
      }
    }
    textSize(15)
    fill(25,25,112);
    text("Menu", 20, 33);
    
    
  }
  
  // Jogo em ação - Fácil - Questão 03
  else if(tela == 7){
    background(240,275,235);
    textSize(25);
    textFont('Georgia')
    fill(25,25,112);
    text("Como se traduz para o inglês: 'Amarelo' ? ", 150, 50, 240);
    stroke(20);
    line(0, 150, 500, 150);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_1 && mouseY < yMenuF1_1 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_1, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 8;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Yellow", 210, 240);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_2 && mouseY < yMenuF1_2 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_2, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 7;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Orange", 215, 300);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_3 && mouseY < yMenuF1_3 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_3, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 6;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Brown", 210, 360);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_4 && mouseY < yMenuF1_4 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_4, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 6;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Black", 220, 420);
    
    if(mouseX > xMenuESC && mouseX < xMenuESC + larguraESC && mouseY > yMenuESC && mouseY < yMenuESC + alturaESC) {
      stroke(200);
      fill(220);
      rect(xMenuESC, yMenuESC, larguraESC, alturaESC, 15);
      
      if(mouseIsPressed){
        tela = 1;
      }
    }
    textSize(15)
    fill(25,25,112);
    text("Menu", 20, 33);
    
    
  }
  
  
  // Jogo em ação - Fácil - Questão 04
  else if(tela == 8){
    background(240,275,235);
    textSize(25);
    textFont('Georgia')
    fill(25,25,112);
    text("Como se traduz para o inglês: 'Preto' ? ", 150, 50, 240);
    stroke(20);
    line(0, 150, 500, 150);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_1 && mouseY < yMenuF1_1 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_1, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 8;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Pink", 210, 240);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_2 && mouseY < yMenuF1_2 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_2, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 8;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Orange", 215, 300);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_3 && mouseY < yMenuF1_3 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_3, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 9;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Black", 210, 360);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_4 && mouseY < yMenuF1_4 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_4, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 8;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Pink", 220, 420);
    
    if(mouseX > xMenuESC && mouseX < xMenuESC + larguraESC && mouseY > yMenuESC && mouseY < yMenuESC + alturaESC) {
      stroke(200);
      fill(220);
      rect(xMenuESC, yMenuESC, larguraESC, alturaESC, 15);
      
      if(mouseIsPressed){
        tela = 1;
      }
    }
    textSize(15)
    fill(25,25,112);
    text("Menu", 20, 33);
    
    
  }
  
  // Jogo em ação - Fácil - Questão 05
  else if(tela == 9){
    background(240,275,235);
    textSize(25);
    textFont('Georgia')
    fill(25,25,112);
    text("Como se traduz para o inglês: 'Rosa' ? ", 150, 50, 240);
    stroke(20);
    line(0, 150, 500, 150);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_1 && mouseY < yMenuF1_1 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_1, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 20;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Pink", 210, 240);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_2 && mouseY < yMenuF1_2 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_2, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 9;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Orange", 215, 300);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_3 && mouseY < yMenuF1_3 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_3, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 9;
      }
      
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Purple", 210, 360);
    
    if(mouseX > xMenu && mouseX < xMenu + menulargura && mouseY > yMenuF1_4 && mouseY < yMenuF1_4 + menualtura) {
      stroke(200);
      fill(220);
      rect(xMenu, yMenuF1_4, menulargura, menualtura, 15);
      
      if(mouseIsPressed){
        tela = 9;
      }
    }
    noStroke();
    fill(25,25,112);
    textSize(30);
    text("Blue", 220, 420);
    
    if(mouseX > xMenuESC && mouseX < xMenuESC + larguraESC && mouseY > yMenuESC && mouseY < yMenuESC + alturaESC) {
      stroke(200);
      fill(220);
      rect(xMenuESC, yMenuESC, larguraESC, alturaESC, 15);
      
      if(mouseIsPressed){
        tela = 1;
      }
    }
    textSize(15)
    fill(25,25,112);
    text("Menu", 20, 33);
    
    
  }
  
  // Jogo em ação - Fácil - Fim do Nível Fácil
  else if(tela == 20){
    background(240,275,235);
    textSize(45);
    textFont('Georgia')
    fill(25,25,112);
    text("CONGRATS!", 125, 150, 280);
    fill(25,25,112);
    textSize(30);
    text("Parabéns!", 180, 240, 300);
    textSize(30);
    text("Você concluiu a primeira fase!", 160, 280, 220);
    
    
    if(mouseX > xMenuESC && mouseX < xMenuESC + larguraESC && mouseY > yMenuESC && mouseY < yMenuESC + alturaESC) {
      stroke(200);
      fill(220);
      rect(xMenuESC, yMenuESC, larguraESC, alturaESC, 15);
      
      if(mouseIsPressed){
        tela = 1;
      }
    }
    textSize(15)
    fill(25,25,112);
    text("Menu", 20, 33);
    
    
  }
  
  
  
  // Instruções do jogo
  else if(tela == 4){
    background(240,275,235);
    stroke(20);
    line(0, 150, 500, 150);
    textSize(40);
    fill(25,25,112);
    text("Instruções", 150, 66, 220);
    fill(25,25,112);
    textSize(18);
    noStroke();
    textAlign(CENTER);
    text("Consistido em níveis do mais básico ao avançado de perguntas e com áudios para aprender palavras e frases em inglês com o intuito de aprender a língua Inglesa.", 70, 180, 355, 200);
    fill(25,25,112);
    textSize(18);
    noStroke();
    textAlign(CENTER);
    text("Aprendendo Inglês é um jogo para aprender o idioma Inglês, uma língua universalmente utilizada. É muito importante ara melhores experiências de vida em outro país, conseguindo ler um texto e falar em inglês. Este jogo é feito para qualquer idade, pois nunca é tarde para aprender uma nova língua.", 70, 300, 355, 200);
    
    if(mouseX > xMenuESC && mouseX < xMenuESC + larguraESC && mouseY > yMenuESC && mouseY < yMenuESC + alturaESC) {
      stroke(200);
      fill(220);
      rect(xMenuESC, yMenuESC, larguraESC, alturaESC, 15);
      
      if(mouseIsPressed){
        tela = 1;
      }
    }
    textSize(15)
    fill(25,25,112);
    text("Menu", 20, 33);
    
  }
  // Créditos do jogo
  else if(tela == 5){    
    background(220);
    textSize(40);
    fill(10);
    text("Créditos", 180, 100);
    textSize(20);
    fill(10);
    text("POLIANA ELLEN", 245, 145);
    textSize(18);
    fill(10);
    text("Função: Programadora do jogo", 200, 165);
    textSize(16);
    fill(80);
    text("Estudante do curso de Bacharelado em Ciências e Tecnologia da UFRN", 200, 185, 260);
    textSize(18);
    fill(10);
    text("Ano de desenvolvimento e criação: 2021", 90, 400);
    image(imagemCriador, 20, 120, 160, 230)
    
    if(mouseX > xMenuESC && mouseX < xMenuESC + larguraESC && mouseY > yMenuESC && mouseY < yMenuESC + alturaESC) {
      stroke(200);
      fill(220);
      rect(xMenuESC, yMenuESC, larguraESC, alturaESC, 15);
      
      if(mouseIsPressed){
        tela = 1;
      }
    }
    textSize(15)
    fill(25,25,112);
    text("Menu", 20, 33);
  }
  
}