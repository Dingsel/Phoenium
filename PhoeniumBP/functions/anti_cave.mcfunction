execute @a[tag=toxin] ~ ~ ~scoreboard players add @s[dy=-64,y=16,scores={toxinlevel=-2..3601}] toxinlevel 1
execute @a[tag=toxin] ~ ~ ~scoreboard players remove @s[y=17,dy=999,scores={toxinlevel=!-1}] toxinlevel 1
tell @a[scores={toxinlevel=3600}] §2§l TOXIN LEVEL : 100%
tell @a[scores={toxinlevel=3000}] §2§l TOXIN LEVEL : 95%
tell @a[scores={toxinlevel=2500}] §2§l TOXIN LEVEL : 72%
tell @a[scores={toxinlevel=2000}] §2§l TOXIN LEVEL : 61%
tell @a[scores={toxinlevel=1500}] §2§l TOXIN LEVEL : 37,5%
tell @a[scores={toxinlevel=1000}] §2§l TOXIN LEVEL : 25%
tell @a[scores={toxinlevel=500}] §2§l TOXIN LEVEL : 12,5%
tell @a[scores={toxinlevel=0}] §2§l TOXIN LEVEL : 0%
effect @a[scores={toxinlevel=3599..99999}] wither 11 1 true
effect @a[scores={toxinlevel=2500..99999}] nausea 11 0 true