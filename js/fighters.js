function Fighter(){
    var info = {
    "name": 'Fighter',
}

info.description = 'A brave and fierce ' + info.name;

var stats = {
    "atk": 0,
    "def": 0,
    "mag": 0,
    "agi": 0
};

return {
    "stats": stats,
    "info": info
    };
}

function Warrior(){}
Warrior.prototype = new Fighter;
Warrior.prototype.stats = {
    "atk": 80,
    "def": 20,
    "mag": 0,
    "agi": 40
}
Warrior.prototype.constructor = Warrior;

function Wizard(){}
Wizard.prototype = new Fighter;
Wizard.prototype.stats = {
    "atk": 20,
    "def": 40,
    "mag": 80,
    "agi": 0
}
Wizard.prototype.constructor = Wizard;

function Ranger(){}
Ranger.prototype = new Fighter;
Ranger.prototype.stats = {
    "atk": 40,
    "def": 60,
    "mag": 40,
    "agi": 0
}
Ranger.prototype.constructor = Ranger;

function Rouge(){}
Rouge.prototype = new Fighter;
Rouge.prototype.stats = {
    "atk": 60,
    "def": 40,
    "mag": 0,
    "agi": 40
}
Rouge.prototype.constructor = Rouge;