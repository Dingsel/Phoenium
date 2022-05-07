#bridge-file-version: #1
event entity @a health0
scoreboard players reset * mana
scoreboard players reset * mastery
scoreboard players reset * event
scoreboard players reset * timer
scoreboard players set * mana 20
scoreboard players set * hp 0
effect @a clear
tag @a remove mage
tag @a remove toxin
tag @a remove light
tag @a remove revivable
tag @a remove mage1
tag @a remove team1
tag @a remove team2
tag @a remove team3
tag @a remove team4
tag @a remove team5
tag @a remove team6
tag @a remove team7
tag @a remove team8
tag @a remove revived
tag @a add cam0
time set day
scoreboard players set * light 2501
scoreboard players set * revive 0
setblock 362 59 6 redstone_block