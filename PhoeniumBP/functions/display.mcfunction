#bridge-file-version: #0
execute @a ~ ~ ~ titleraw @s actionbar {"rawtext":[{"text":"§3Mana : "},{"score":{"name":"*","objective":"mana"}},{"text":"/20"}]}
execute @a[tag=mage,tag=!mage1] ~ ~ ~ titleraw @s[tag=mage,tag=!mage1] actionbar {"rawtext":[{"text":"§3Mana : "},{"score":{"name":"*","objective":"mana"}},{"text":"/40"}]}
execute @a[tag=mage1] ~ ~ ~ titleraw @s[tag=mage1] actionbar {"rawtext":[{"text":"§3Mana : "},{"score":{"name":"*","objective":"mana"}},{"text":"/60"}]}