import { world } from "mojang-minecraft";

world.events.tick.subscribe(eventData => {
    const players = Array.from(world.getPlayers());
    for (const player of players) {
        const playerInventory = player.getComponent("inventory").container;
        for (let i = 0;i < playerInventory.size; i++) {
            const item = playerInventory.getItem(i);
            if (item != undefined) {
            if(item.id == "varo:meanding_wand") {
                const lore = ["Phoenium Sword"]
                item.setLore(lore)
                }
            }
        }
    }
})

