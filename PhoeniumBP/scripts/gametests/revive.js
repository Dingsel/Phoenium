import { world } from "mojang-minecraft";


const commandPrefix = "!revive" 


function customCommand(command, args, msg, player) {

  switch(command) {

    case "":
      world.getDimension("overworld").runCommand(`tellraw ${player.nameTag} {"rawtext":[{"text":"Please provide a Username"}]}`)
      break;
    case player.nameTag:
      world.getDimension("overworld").runCommand(`tellraw ${player.nameTag} {"rawtext":[{"text":"You can't revive yourself."}]}`);
      break;
    default:
      try {
      world.getDimension("overworld").runCommand(`execute ${player.nameTag} ~ ~ ~ execute @s[tag=revivable] ~ ~ ~ tp ${command} ${player.nameTag}`);
      world.getDimension("overworld").runCommand(`execute ${player.nameTag} ~ ~ ~ execute @s[tag=revivable] ~ ~ ~ tag @s remove revivable`);
      world.getDimension("overworld").runCommand(`execute ${player.nameTag} ~ ~ ~ execute @s[tag=!revivable] ~ ~ ~ tellraw ${player.nameTag} {"rawtext":[{"text":"You have to Consume a Revive Token first"}]}.`)
      } catch(error) {
        world.getDimension("overworld").runCommand(`execute ${player.nameTag} ~ ~ ~ execute @s ~ ~ ~ tellraw ${player.nameTag} {"rawtext":[{"text":"There was an Error running this command. Did you drink the Player in a bottle?"}]}`);
    }
  }
}
world.events.beforeChat.subscribe(msg => {
  if(!msg.message.startsWith(commandPrefix)) return
   const args = msg.message.slice(commandPrefix.length).trim().split(/\s+/);
  msg.cancel = true
  const player = msg.sender
  const command = args.shift()
  customCommand(command, args, args.join(" "), player)
})