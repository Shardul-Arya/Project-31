const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

drops = []

var maxDrops = 100;
var umbrella

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(300,650);
    engine = Engine.create();
    world = engine.world;

    for(i=0;i<maxDrops;i++){
        drops.push(new createDrop(random(0,300), random(0,650)));
    }

    umbrella = new Umbrella(150, 545)
}

function draw(){
    background(0);
    Engine.update(engine);

    rand = Math.round(random(1,4));
    if (frameCount%80===0) {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,270), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6);
        thunder.lifetime = 12
    }

    umbrella.display();

    drops[0].display();
    drops[1].display();
    drops[2].display();
    drops[3].display();
    drops[4].display();
    drops[5].display();
    drops[6].display();
    drops[7].display();
    drops[8].display();
    drops[9].display();
    drops[10].display();
    drops[11].display();
    drops[12].display();
    drops[13].display();
    drops[14].display();
    drops[15].display();
    drops[16].display();
    drops[17].display();
    drops[18].display();
    drops[19].display();
    drops[20].display();
    drops[21].display();
    drops[22].display();
    drops[23].display();
    drops[24].display();
    drops[25].display();
    drops[26].display();
    drops[27].display();
    drops[28].display();
    drops[29].display();
    drops[30].display();
    drops[31].display();
    drops[32].display();
    drops[33].display();
    drops[34].display();
    drops[35].display();
    drops[36].display();
    drops[37].display();
    drops[38].display();
    drops[39].display();
    drops[40].display();
    drops[41].display();
    drops[42].display();
    drops[43].display();
    drops[44].display();
    drops[45].display();
    drops[46].display();
    drops[47].display();
    drops[48].display();
    drops[49].display();
    drops[50].display();
    drops[51].display();
    drops[52].display();
    drops[53].display();
    drops[54].display();
    drops[55].display();
    drops[56].display();
    drops[57].display();
    drops[58].display();
    drops[59].display();
    drops[60].display();
    drops[61].display();
    drops[62].display();
    drops[63].display();
    drops[64].display();
    drops[65].display();
    drops[66].display();
    drops[67].display();
    drops[68].display();
    drops[69].display();
    drops[70].display();
    drops[71].display();
    drops[72].display();
    drops[73].display();
    drops[74].display();
    drops[75].display();
    drops[76].display();
    drops[77].display();
    drops[78].display();
    drops[79].display();
    drops[80].display();
    drops[81].display();
    drops[82].display();
    drops[83].display();
    drops[84].display();
    drops[85].display();
    drops[86].display();
    drops[87].display();
    drops[88].display();
    drops[89].display();
    drops[90].display();
    drops[91].display();
    drops[92].display();
    drops[93].display();
    drops[94].display();
    drops[95].display();
    drops[96].display();
    drops[97].display();
    drops[98].display();
    drops[99].display();

    drawSprites();
}