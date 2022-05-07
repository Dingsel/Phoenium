import { world } from "mojang-minecraft";

const commandPrefix = "!revive" 

function customCommand(command, args, msg, player) {
  try {
    switch(command) {
      case "": throw "No Player specified";
      case player.name: throw "You cannot revive yourself";
      default : 
        if(player.hasTag("revivable")){
          try {
            world.getDimension("overworld").runCommand(`tag ${command} add revived`);
            world.getDimension("overworld").runCommand(`tp ${command} ${player.name}`);
          } catch (error) {
            throw "Player not found or already revived";
          }
          world.getDimension("overworld").runCommand(`tag ${player.name} remove revivable`);
        }
      }
    } catch (error) {
      world.getDimension("overworld").runCommand(`tellraw ${player.name} {"rawtext":[{"text":"${error}"}]}`);
  }
}

world.events.beforeChat.subscribe(msg => {
    const message = msg.message
    const player = msg.sender
    if(msg.message.startsWith("!revive") != true) {
        if(player.hasTag("admin")) {
            msg.cancel = true
            world.getDimension("overworld").runCommand(`tellraw @a {"rawtext":[{"text":"§4${player.name}§r > ${message} "}]}`)
        }else {
            msg.cancel = true
            world.getDimension("overworld").runCommand(`tellraw @a {"rawtext":[{"text":"§a${player.name}§r > ${message} "}]}`)
        }
    }
    if(!msg.message.startsWith(commandPrefix)) return
    const args = msg.message.slice(commandPrefix.length).trim().split(/\s+/);
    const command = args.shift()
    msg.cancel = true
    customCommand(command, args, args.join(" "), player)
})