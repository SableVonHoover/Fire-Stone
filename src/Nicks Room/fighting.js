var clvl = 1;
var chp = 20;
var catk = 12;
var cdfn = 15;
var cspd = 35;

var cmove1;
var cmove2;

var bdmg = 10;


var elvl = 1;
var ehp = 30;
var eatk = 10;
var edfn = 12;
var espd = 25;

emove1;
emove2;
function moveSelect(){
    
    return spdCheck();
};
function spdCheck(){
if (espd >= cspd){
    stepOneDmg2C();
}
else (espd < cspd){
    stepOneDmg2E();
};
};



function stepOneDmg2E(){
    var eDmg = (catk*bdmg)
    // apply eDmg to eHB

};
function stepOneDmg2C(){
    var cDmg = (eatk*bdmg)
};







/*[
    {
    "lvl": "1",
    "hp": "20",
    "atk": "12",
    "dfn": "15",
    "spd": "35"
    }
]*/

/*var dmg2eNORM = ((2*clvl+10)/250(catk/edfn)*bdmg+2)

console.log(dmg2eNORM);

var dmg2eSTAB = ((2*clvl+10)/250(catk/edfn)*bdmg+2)*1.5

function stabby(){
    if (cmove1 === true)
        return dmg2eSTAB;
    else (cmove1 === false)
        return dmg2eNORM;
};

function */


// check notebook