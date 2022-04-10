import { EntityQueryScoreOptions, EntityQueryOptions, world } from "mojang-minecraft";


const kickable = new EntityQueryScoreOptions()
kickable.objective = 'kickable'
kickable.minScore = 1
const kickabletest = new EntityQueryOptions
kickabletest.scoreOptions = [kickable]



world.events.tick.subscribe(evnentData => {
    const kickableup = world.getPlayers(kickabletest)
    for(const player of Array.from(kickableup)) {
        try {
             world.getDimension("overworld").runCommand(`kick ${player.nameTag} Bye`)   
        } catch (error) {
            world.getDimension("overworld").runCommand(`tellraw ${player.nameTag} {"rawtext":[{"text":"Can't kick ${player.nameTag}"}]}`)
        }
    }
})