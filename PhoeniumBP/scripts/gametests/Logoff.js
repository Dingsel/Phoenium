import { world } from "mojang-minecraft";


let storageArray = [];
let locationArray = [];

world.events.tick.subscribe(eventData => {
    const players = Array.from(world.getPlayers());
    for (const player of players) {
        const playerInventory = player.getComponent('inventory').container;
        storageArray.push(player.name)
        locationArray.push(player.name)
        locationArray.push(player.location)
        for (let i = 0; i < playerInventory.size; i++) {
            const item = playerInventory.getItem(i);
            storageArray.push(item)
        }
        //cleanup the array
        if(storageArray.length > players.length * 36 * 2) {
            storageArray.splice(0, 1 + playerInventory.size)
        }
        if(locationArray.length > players.length * 3 * 2) {
            locationArray.splice(0, 2)

        }
    }
})
world.events.playerLeave.subscribe((leavingPlayer, playerInventory) => {
    var storageArrayIndex = storageArray.lastIndexOf(leavingPlayer.playerName);
    var locationArrayIndex = locationArray.lastIndexOf(leavingPlayer.playerName);
    const entity = world.getDimension("overworld").spawnEntity("varo:logger", locationArray[locationArrayIndex + 1])
    entity.nameTag = leavingPlayer.playerName
    entity.addTag(leavingPlayer.playerName)
    for (let i = 0; i < 35; i++) {
        const loggerInventory = entity.getComponent('inventory').container
        const index = storageArrayIndex + i + 1
        if (storageArray[index] != undefined) {
            loggerInventory.setItem(i, storageArray[index])

        }
    }
})

world.events.playerJoin.subscribe(eventData => {
    const joiningPlayerName = eventData.player.name
    try {
        //world.getDimension("overworld").runCommand(`tp ${joiningPlayerName} @e[tag=${joiningPlayerName}`)
        world.getDimension("overworld").runCommand(`event entity @e[tag=${joiningPlayerName},type=varo:logger] despawn`)
    } catch (error) {
        world.getDimension("overworld").runCommand(`say ${joiningPlayerName} ist RAUS`)
    }
})

