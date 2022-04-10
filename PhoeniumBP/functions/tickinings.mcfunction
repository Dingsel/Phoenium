#bridge-file-version: #3
kill @e[name=Xray,type=item]
scoreboard players remove @a[tag=light,scores={light=!0}] light 1
effect @a[scores={light=0}] wither 11 1 true
effect @a[tag=light,scores={light=0..1000}] blindness 2 1 true
tell @a[scores={light=1}] §4Light : 0%
tell @a[scores={light=500}] §eLight : 20%
tell @a[scores={light=1000}] §eLight : 40%
tell @a[scores={light=1500}] §eLight : 60%
tell @a[scores={light=2000}] §eLight : 80%
tell @a[scores={light=2499}] §eLight : 100%
execute @r ~ ~ ~ execute @e[type=varo:timer]  ~ ~ ~ scoreboard players add @s timer 1
execute @e[type=varo:timer,scores={timer=72000..99999}] ~ ~ ~ scoreboard players set @a kickable 1
execute @e[type=varo:timer,scores={timer=72020..99999}] ~ ~ ~ scoreboard players set * kickable 0
execute @e[type=varo:timer,scores={timer=72021..99999}] ~ ~ ~ scoreboard players set @s timer 0
execute @a[tag=water] ~ ~ ~ detect ~ ~ ~ water 0 effect @s wither 1 1 true
execute @r ~ ~ ~ execute @e[type=varo:eventtimer]  ~ ~ ~ scoreboard players add @s event 1
execute @e[type=varo:eventtimer,scores={event=108000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§4§4The deadly §aToxin §4is rising and will arrive in §l5§r§4 Minutes."}]}
execute @e[type=varo:eventtimer,scores={event=114000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§4The deadly §aToxin §4has arrived."}]}
execute @e[type=varo:eventtimer,scores={event=114000..137990}] ~ ~ ~ tag * add toxin
execute @e[type=varo:eventtimer,scores={event=114000}] ~ ~ ~ scoreboard players set * toxinlevel 1
execute @e[type=varo:eventtimer,scores={event=138000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§4The deadly §aToxin §4is §lDISSAPPEARING."}]}
execute @e[type=varo:eventtimer,scores={event=138000}]  ~ ~ ~ tag * remove toxin
execute @e[type=varo:eventtimer,scores={event=220000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§1The Water will become §ldeadly §r§1in 5 min."}]}
execute @e[type=varo:eventtimer,scores={event=226000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§1The Water is §ldeadly §r§1now!"}]}
execute @e[type=varo:eventtimer,scores={event=226000..249990}] ~ ~ ~ tag * add water
execute @e[type=varo:eventtimer,scores={event=250000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§1The deadly Water is §lDISSAPPEARING."}]}
execute @e[type=varo:eventtimer,scores={event=250000}] ~ ~ ~ tag * remove water
execute @e[type=varo:eventtimer,scores={event=330000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§2The §kk§r§4Random Item Event§k§2j§r §2 will arrive soon."}]}
execute @e[type=varo:eventtimer,scores={event=336000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§2Collect §lGrass (Die Pflanze)§r §2or else you will die. §l(20 min left)"}]}
execute @e[type=varo:eventtimer,scores={event=336000..364000}] ~ ~ ~ tag * add item
execute @e[type=varo:eventtimer,scores={event=342000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§2Collect §lGrass (Die Pflanze)§r §2or else you will die. §l§e(15 min left)"}]}
execute @e[type=varo:eventtimer,scores={event=348000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§2Collect §lGrass (Die Pflanze)§r §2or else you will die. §6§l(10 min left)"}]}
execute @e[type=varo:eventtimer,scores={event=356000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§2Collect §lGrass (Die Pflanze)§r §2or else you will die. §4§l(5 min left)"}]}
execute @e[type=varo:eventtimer,scores={event=364000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§2Collect §lGrass (Die Pflanze)§r §2or else you will die. §0§l(0 min left)"}]}
execute @e[type=varo:eventtimer,scores={event=364020}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§eDark Phoenix joined the game."}]}
execute @e[type=varo:eventtimer,scores={event=364040}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"<§0§lDark Phoenix§r> §8Do you have my Item?"}]}
execute @e[type=varo:eventtimer,scores={event=364060}] ~ ~ ~ kill @e[tag=item]
execute @e[type=varo:eventtimer,scores={event=364060}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§eDark Phoenix left the game. Or did he?"}]}
execute @e[type=varo:eventtimer,scores={event=364080}] ~ ~ ~ tag * remove item
execute @e[type=varo:eventtimer,scores={event=450000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§eThe §kk§r§e§lLight Event§r§e§kf§r §e will arrive soon."}]}
execute @e[type=varo:eventtimer,scores={event=456000}]  ~ ~ ~ tellraw @a {"rawtext":[{"text":"§e Stay close to §lLIGHT§r§e to prevent death."}]}
execute @e[type=varo:eventtimer,scores={event=456000..479990}] ~ ~ ~ tag * add light
execute @e[type=varo:eventtimer,scores={event=456000}] ~ ~ ~ scoreboard players set * light 2500
execute @e[type=varo:eventtimer,scores={event=480000}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§eThe Light Event is dissapearing!"}]}
execute @e[type=varo:eventtimer,scores={event=480000}] ~ ~ ~ tag * remove light
execute @e[type=varo:eventtimer,scores={event=480000}] ~ ~ ~ scoreboard players set * light 2500
 