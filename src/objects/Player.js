import char1 from "../imgs/char/char1.png";
import char2 from "../imgs/char/char2.png";

export class Player {
    constructor() {
        this.preset = 0;
        this.img;
        this.name = "";
        this.surname = "";
        this.race = "";
        this.gender = "";
        this.playedDays = 0;
        this.day = 31;
        this.weekday = 1;
        this.month = 1;
        this.year = 1088;
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
        this.minDamage;
        this.maxDamage;
        this.fishing = 1;
        this.fishingXp = 0;
        this.fishingtoToLevel = 100;
        this.lastMeditation = -1;
        this.money = 0;
        this.inventory = []
        this.weight = 0;
        this.maxWeight = 20;
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
        this.img = player.img;
        this.name = player.name;
        this.surname = player.surname;
        this.race = player.race;
        this.gender = player.gender;
        this.playedDays = player.playedDays;
        this.day = player.day;
        this.weekday = player.weekday;
        this.month = player.month;
        this.year = player.year;
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
        this.minDamage = player.minDamage;
        this.maxDamage = player.maxDamage;
        this.fishing = player.fishing;
        this.fishingXp = player.fishingXp;
        this.fishingtoToLevel = player.fishingtoToLevel;
        this.lastMeditation = player.lastMeditation;
        this.money = player.money;
        this.inventory = player.inventory;
        this.weight = player.weight;
        this.maxWeight = player.maxWeight;
        this.houses = player.houses;
        this.quests = player.quests;
    }

    selectPreset(preset) {
        switch (preset) {
            case 0:
                this.preset = 0;
                this.img = char1;
                this.name = "Tadvan";
                this.surname = "Autumnsteam";
                this.race = "Human";
                this.gender = "M";
                this.age = 23;
                this.str = 12;
                this.int = 10;
                this.chr = 8;
                this.houses[0].owned = true;
                break;
            case 1:
                this.preset = 1;
                this.img = char2;
                this.name = "Meri";
                this.surname = "Autumnsteam";
                this.race = "Human";
                this.gender = "F";
                this.age = 22;
                this.str = 6;
                this.int = 10;
                this.chr = 14;
                this.houses[0].owned = true;
                break;
            default:
                break;
        }
        this.hp = this.str * 10;
        this.maxHp = this.str * 10;
        this.minDamage = this.str / 2;
        this.maxDamage = this.str;
        this.maxWeight = this.str * 2;
    }

    passDay() {
        if(this.month == 1 || this.month == 3 || this.month == 5 || this.month == 7 || this.month == 8 || this.month == 10 && this.day == 31) {
            this.day = 1;
            this.month += 1;
        } else if (this.month == 4 || this.month == 6 || this.month == 9 || this.month == 11 && this.day == 30) {
            this.day = 1;
            this.month += 1;
        } else if (this.month == 2 && this.day == 28) {
            this.day = 1;
            this.month += 1;
        } else if (this.month == 12 && this.day == 31){
            this.day = 1;
            this.month = 1;
            this.year += 1;
        } else {
            this.day += 1;
        }

        if (this.weekday < 7) {
            this.weekday += 1;
        } else {
            this.weekday = 1;
        }
    }

    getweekday() {
        switch (this.weekday) {
            case 1:
                return "Monday"
            case 2:
                return "Tuesday"
            case 3:
                return "Wednesday"
            case 4:
                return "Thursday"
            case 5:
                return "Friday"
            case 6:
                return "Saturday"
            case 7:
                return "Sunday"
        }
    }
    
    sleep() {
        this.sta = this.maxSta;
        this.playedDays += 1;
        this.passDay();
    }
    
    meditate() {
        if (this.lastMeditation < this.playedDays) {
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
        this.lastMeditation = this.playedDays;
    }
  }