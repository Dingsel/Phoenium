import { world } from "mojang-minecraft"

var maxmana = 0;
var bonusMana = 0;
var manaGain = 0;
var bonusManaGain = 0;

world.events.tick.subscribe((eventData) => {
    try{
    const players = Array.from(world.getPlayers())
    for (const player of players) {
        if(player.hasTag("mage")) {
            maxmana = 40 + bonusMana;
            manaGain = 10 - bonusManaGain;
        }
        if(player.hasTag("mage1")) {
            maxmana = 60 + bonusMana;
            manaGain = 7 - bonusManaGain;
        }
        if(player.hasTag("mage") != true) {
            maxmana = 20 + bonusMana;
            manaGain = 20 - bonusManaGain;
        }
        if(eventData.currentTick % manaGain == 0){
            player.runCommand(`scoreboard players add @s[scores={mana=0..${maxmana - 1}}] mana 1`);
        }
        player.runCommand(`titleraw @s actionbar {"rawtext":[{"text":"§3Mana : "},{"score":{"name":"*","objective":"mana"}},{"text":"/${maxmana}"}]}`);
    }
    } catch {

    }
})