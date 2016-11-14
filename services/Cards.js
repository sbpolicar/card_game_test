CardGameTest.service('Cards', function(){
// BEGIN SHARED VARS
    var hpRatio = 140
    var hpHigh = 25
    var hpLow = 13
    var hpBonusHigh = hpHigh
    var hpLossHigh = hpHigh
    var hpBonusLow = hpLow
    var hpLossLow = hpLow
// END SHARED VARS

// BEGIN Player
    function Player (name) {
        switch(name){
            case 'Warrior':
                this.stats = {
                    "attack": 80,
                    "defense": 20,
                    "magic": 0,
                    "agility": 40
                }
                break
            case 'Wizard':
                this.stats = {
                    "attack": 20,
                    "defense": 40,
                    "magic": 80,
                    "agility": 0
                }
                break
            case 'Ranger':
                this.stats = {
                    "attack": 50,
                    "defense": 50,
                    "magic": 0,
                    "agility": 40
                }
                break
            case 'Rogue':
                this.stats = {
                    "attack": 30,
                    "defense": 20,
                    "magic": 30,
                    "agility": 60
                }
                break
        }

        if(name === 'Warrior'){
            this.stats["hp"] = hpRatio + Math.floor(hpRatio / this.stats.defense) + hpBonusHigh
        } else if (name === 'Ranger') {
            this.stats["hp"] = (hpRatio + Math.floor(hpRatio / this.stats.defense) + hpBonusHigh) - 3
        } else {
            this.stats["hp"] = hpRatio + Math.floor(hpRatio / this.stats.defense) + hpBonusLow
        }

        this.name = name

        this.getStats = function(){
            return stats
        }
        this.getName = function () {
            return name
        }
        this.setName = function (value) {
            this.name = value
        }
    }

    Player.prototype.stats = this.getStats
    Player.prototype.name = this.getName
// END Player

// BEGIN ENEMY
    function Enemy (name) {
        switch(name){
            case 'Orc':
                this.stats = {
                    "attack": 80,
                    "defense": 20,
                    "magic": 0,
                    "agility": 40
                }
                break
            case 'Warlock':
                this.stats = {
                    "attack": 20,
                    "defense": 40,
                    "magic": 80,
                    "agility": 0
                }
                break
            case 'Goblin':
                this.stats = {
                    "attack": 50,
                    "defense": 50,
                    "magic": 0,
                    "agility": 40
                }
                break
            case 'Lycan':
                this.stats = {
                    "attack": 30,
                    "defense": 20,
                    "magic": 30,
                    "agility": 60
                }
                break
        }

        if(name === 'Warrior'){
            this.stats["hp"] = hpRatio + Math.floor(hpRatio / this.stats.defense) + hpBonusHigh
        } else if (name === 'Ranger') {
            this.stats["hp"] = (hpRatio + Math.floor(hpRatio / this.stats.defense) + hpBonusHigh) - 3
        } else {
            this.stats["hp"] = hpRatio + Math.floor(hpRatio / this.stats.defense) + hpBonusLow
        }

        this.name = name

        this.getStats = function(){
            return stats
        }
        this.getName = function () {
            return name
        }
        this.setName = function (value) {
            this.name = value
        }
    }

    Enemy.prototype.stats = this.getStats
    Enemy.prototype.name = this.getName
// END ENEMY

    return {
        Player: Player,
        Enemy: Enemy
    }
})