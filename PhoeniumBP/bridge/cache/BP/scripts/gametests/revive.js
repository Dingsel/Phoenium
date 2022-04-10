{
	"file_path": "C:\\Users\\Luka\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\PhoeniumBP\\scripts\\gametests\\revive.js",
	"file_type": "script",
	"format_version": 0,
	"file_uuid": "4e8654b7_1fc5_40fb_9179_26ff668cd129",
	"file_version": 0,
	"cache_content": "import { world } from \"mojang-minecraft\";\r\n\r\n\r\nconst commandPrefix = \"!revive\" \r\n\r\n\r\nfunction customCommand(command, args, msg, player) {\r\n\r\n  switch(command) {\r\n\r\n    case \"\":\r\n      world.getDimension(\"overworld\").runCommand(`tellraw ${player.nameTag} {\"rawtext\":[{\"text\":\"Please provide a Username\"}]}`)\r\n      break;\r\n    case player.nameTag:\r\n      world.getDimension(\"overworld\").runCommand(`tellraw ${player.nameTag} {\"rawtext\":[{\"text\":\"You can't revive yourself.\"}]}`);\r\n      break;\r\n    default:\r\n      try {\r\n      world.getDimension(\"overworld\").runCommand(`execute ${player.nameTag} ~ ~ ~ execute @s[tag=revivable] ~ ~ ~ tp ${command} ${player.nameTag}`);\r\n      world.getDimension(\"overworld\").runCommand(`execute ${player.nameTag} ~ ~ ~ execute @s[tag=revivable] ~ ~ ~ tag @s remove revivable`);\r\n      world.getDimension(\"overworld\").runCommand(`execute ${player.nameTag} ~ ~ ~ execute @s[tag=!revivable] ~ ~ ~ tellraw ${player.nameTag} {\"rawtext\":[{\"text\":\"You have to Consume a Revive Token first\"}]}.`)\r\n      } catch(error) {\r\n        world.getDimension(\"overworld\").runCommand(`execute ${player.nameTag} ~ ~ ~ execute @s ~ ~ ~ tellraw ${player.nameTag} {\"rawtext\":[{\"text\":\"There was an Error running this command. Did you drink the Player in a bottle?\"}]}`);\r\n    }\r\n  }\r\n}\r\nworld.events.beforeChat.subscribe(msg => {\r\n  if(!msg.message.startsWith(commandPrefix)) return\r\n   const args = msg.message.slice(commandPrefix.length).trim().split(/\\s+/);\r\n  msg.cancel = true\r\n  const player = msg.sender\r\n  const command = args.shift()\r\n  customCommand(command, args, args.join(\" \"), player)\r\n})"
}