ServerEvents.highPriorityData(event => {
    // This overwrites the advancement with an "impossible" requirement
    event.addJson(`regions_unexplored:advancements/parent.json`, {
        criteria: {
            impossible: {
                trigger: "minecraft:impossible"
            }
        }
    })
})