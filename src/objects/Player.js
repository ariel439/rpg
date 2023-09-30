export class Player {
    constructor() {
        this.preset = 0;
        this.name = "";
        this.surname = "";
        this.race = "";
        this.gender = "";
        this.day = 1;
        this.age = 0;
        this.level = 1;
        this.xp = 0;
        this.str = 10;
        this.int = 10;
        this.chr = 10;
        this.hp = 100;
        this.maxHp = 100;
        this.mana = 0;
        this.maxMana = 0;
        this.sta = 100;
        this.maxSta = 100;
        this.fishing = 1;
        this.fishingXp = 0;
        this.fishingtoToLevel = 100;
        this.lastMeditation = 0;
        this.houses = [
          {
            id: 0,
            owned: false,
          }
        ];
        this.quests = [
          {
            id: 0,
            step: 0,
            title: 'Presence of Mind',
            meditateCounter: 0,
          }
        ];
    }

    save(player) {
        const playerstr = JSON.stringify(player);
        localStorage.setItem("player", playerstr);
    }

    load() {
        let player = new Player();
        const playerstr2 = localStorage.getItem("player");
        player = JSON.parse(playerstr2);
        this.preset = player.preset;
        this.name = player.name;
        this.surname = player.surname;
        this.race = player.race;
        this.gender = player.gender;
        this.day = player.day;
        this.age = player.age;
        this.level = player.level;
        this.xp = player.xp;
        this.str = player.str;
        this.int = player.int;
        this.chr = player.chr;
        this.hp = player.hp;
        this.maxHp = player.maxHp;
        this.mana = player.mana;
        this.maxMana = player.maxMana;
        this.sta = player.sta;
        this.maxSta = player.maxSta;
        this.fishing = player.fishing;
        this.fishingXp = player.fishingXp;
        this.fishingtoToLevel = player.fishingtoToLevel;
        this.lastMeditation = player.lastMeditation;
        this.houses = player.houses;
        this.quests = player.quests;
    }

    selectPreset(preset) {
        switch (preset) {
            case 0:
                this.preset = 0;
                this.name = "Tadvan";
                this.surname = "Autumnsteam";
                this.race = "Human";
                this.gender = "M";
                this.age = 23;
                this.str = 12;
                this.int = 10;
                this.chr = 8;
                this.hp = 120;
                this.maxHp = 120;
                this.sta = 100;
                this.maxSta = 100;
                this.houses[0].owned = true;
                break;
            case 1:
                this.preset = 1;
                this.name = "Meri";
                this.surname = "Autumnsteam";
                this.race = "Human";
                this.gender = "F";
                this.age = 22;
                this.str = 6;
                this.int = 10;
                this.chr = 14;
                this.hp = 60;
                this.maxHp = 60;
                this.sta = 100;
                this.maxSta = 100;
                this.houses[0].owned = true;
                break;
            default:
                break;
        }
    }
    
    sleep() {
        this.sta = this.maxSta;
        this.day += 1;
    }
    
    meditate() {
        if (this.lastMeditation < this.day) {
            if (this.quests[0].step == 0){
                this.quests[0].step = 1;
            } else if (this.quests[0].step == 1 && this.quests[0].meditateCounter < 10){
                this.quests[0].meditateCounter += 1;
            } else if (this.quests[0].step == 1 && this.quests[0].meditateCounter == 10) {
                this.mana = this.int * 10;
                this.maxMana = this.int * 10;
                this.quests[0].step = 99;
            } else {
                this.mana == this.maxMana;
            }
        }
        this.lastMeditation = this.day;
    }
  }