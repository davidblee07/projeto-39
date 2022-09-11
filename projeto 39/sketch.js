const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6,
box7, box8, box9, box10, box11, box12,
box13, box14, box15, box16, box17, box18, box19, box20, box21;
var batman,coringa,corda,chao;

function preload() {
  bg = loadImage("gotham-city.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  chao = new Chao(600, 600, 1200, 20);

  batman = new Batman(400,800,250);
  corda = new Corda(batman.body, { x: 500, y: 50 });
  coringa = new Coringa(1100,550,300);

  box1 = new Caixa(600, 100, 70, 70);
  box2 = new Caixa(600, 100, 70, 70);
  box3 = new Caixa(600, 100, 70, 70);
  box4 = new Caixa(600, 100, 70, 70);
  box5 = new Caixa(700, 100, 70, 70);
  box6 = new Caixa(700, 100, 70, 70);
  box7 = new Caixa(700, 100, 70, 70);
  box8 = new Caixa(700, 100, 70, 70);
  box9 = new Caixa(800, 100, 70, 70);
  box10 = new Caixa(800, 100, 70, 70);
  box11 = new Caixa(800, 100, 70, 70);
  box12 = new Caixa(900, 100, 70, 70);
  box13 = new Caixa(900, 100, 70, 70);
  box14 = new Caixa(900, 100, 70, 70);
  box15 = new Caixa(900, 100, 70, 70);
  box21 = new Caixa(900, 100, 70, 70);
  box16 = new Caixa(700, 100, 70, 70);
  box17 = new Caixa(700, 100, 70, 70);
  box18 = new Caixa(600, 100, 70, 70);
  box19 = new Caixa(800, 100, 70, 70);
  box20 = new Caixa(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  chao.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  

  batman.display();
  corda.display();
  coringa.display();

}

function mouseDragged(){
    Matter.Body.setPosition(batman.body, { x: mouseX, y: mouseY});
}
