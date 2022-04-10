import { world } from "mojang-minecraft";

world.events.beforeChat.subscribe(msg => {
    const player = msg.sender
    const message = msg.message
    if(player.hasTag("admin")) {
        msg.cancel = true
        world.getDimension("overworld").runCommand(`tellraw @a {"rawtext":[{"text":"§4${player.nameTag}§r > ${msg.message} "}]}`)
    }else {
        msg.cancel = true
        world.getDimension("overworld").runCommand(`tellraw @a {"rawtext":[{"text":"§a${player.nameTag}§r > ${msg.message} "}]}`)
    }
})