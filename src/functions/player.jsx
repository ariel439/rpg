import char1 from "../imgs/char/char1.png"
import char2 from "../imgs/char/char2.png"

export function selectPreset(player, preset) {
    switch (preset) {
        case 0:
            player.preset = 0;
            player.img = char1;
            player.name = "Tadvan";
            player.surname = "Autumnsteam";
            player.race = "Human";
            player.gender = "M";
            player.age = 23;
            player.baseHp = 10;
            player.hp = 100;
            player.maxHp = 100;
            player.baseSta = 10;
            player.sta = 100;
            player.maxSta = 100;
            player.houses[0].owned = true;
            break;
        case 1:
            player.preset = 1;
            player.img = char2;
            player.name = "Meri";
            player.surname = "Autumnsteam";
            player.race = "Human";
            player.gender = "F";
            player.age = 22;
            player.baseHp = 6;
            player.hp = 60;
            player.maxHp = 60;
            player.baseSta = 8;
            player.sta = 80;
            player.maxSta = 80;
            player.houses[0].owned = true;
            break;
        default:
            break;
    }
    return player;
}