tag @r[scores={fly=2}] add revoke
execute @a[tag=revoke] ~ ~ ~ summon varo:fly_ride ~ ~-1 ~
execute @a[tag=revoke] ~ ~ ~ ride @s start_riding @e[r=5,type=varo:fly_ride] teleport_ride
scoreboard players set @a[scores={fly=2}] fly 0
tag @a[tag=revoke] remove revoke