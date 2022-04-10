import { world } from "mojang-minecraft";

world.events.tick.subscribe(eventData => {
    const players = Array.from(world.getPlayers());
    for (const player of players) {
        const playerInventory = player.getComponent('inventory').container;
        for (let i = 0;i < playerInventory.size+1; i++) {
            const item = playerInventory.getItem(i);
            if(item.id == "varo:mending_wand") {
                item.setLore(["Mending Wand§6§lHealing Wand\n§r§6Ability: Phoenix Grace §e§lRIGHT CLICK\n§r§7Restore§2 1.5 Hearts§7 over 2 seconds\n§8Mana Cost: §2 20\n§8Cooldown: §22.0s\n\n §l§6LEGENDARY ITEM"])
            }
        }
    }
})

