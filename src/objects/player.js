let player = {
    preset: 0,
    img: "",
    name: "",
    surname: "",
    race: "",
    gender: "",
    day: 1,
    age: 0,
    level: 1,
    xp: 0,
    str: 10,
    int: 10,
    chr: 10,
    hp: 100,
    maxHp: 100,
    mana: 0,
    maxMana: 0,
    sta: 100,
    maxSta: 100,
    fishing: 1,
    fishingXp: 0,
    fishintoToLevel: 100,
    lastMeditation: 0,
    houses: [
      {
        id: 0,
        owned: false,
      }
    ],
    quests: [
      {
        id: 0,
        step: 0,
        title: 'Presence of Mind',
        meditateCounter: 0,
      }
    ],

    selectPreset(preset) {
        switch (preset) {
            case 0:
                this.preset = 0;
                this.img = "/rpg/src/imgs/char/char1.png";
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
                this.img = "/rpg/src/imgs/char/char2.png";
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
    },
    
    sleep() {
        this.sta = this.maxSta;
        this.day += 1;
    },
    
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
    },
  }