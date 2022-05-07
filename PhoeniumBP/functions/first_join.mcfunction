#bridge-file-version: #4
execute @a[tag=!joined] ~ ~ ~ scoreboard objectives add mana dummy mana
execute @a[tag=!joined] ~ ~ ~ scoreboard objectives add mastery dummy mastery
execute @a[tag=!joined] ~ ~ ~ scoreboard objectives add hp dummy hp
execute @a[tag=!joined] ~ ~ ~ scoreboard objectives add light dummy light
execute @a[tag=!joined] ~ ~ ~ scoreboard objectives add event dummy event
execute @a[tag=!joined] ~ ~ ~ scoreboard objectives add timer dummy timer
execute @a[tag=!joined] ~ ~ ~ scoreboard objectives add revive dummy revive
execute @a[tag=!joined] ~ ~ ~ scoreboard objectives add toxinlevel dummy toxinlevel
execute @a[tag=!joined] ~ ~ ~ scoreboard objectives add fly dummy fly
tag @a add joined