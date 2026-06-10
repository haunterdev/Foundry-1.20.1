ServerEvents.highPriorityData(event => {

    const removeOre = (namespace, id, feature) => {
        event.addJson(`${namespace}:forge/biome_modifier/remove_${id}`, {
            type: "forge:remove_features",
            biomes: "#minecraft:is_overworld",
            features: feature,
            step: "underground_ores"
        })
    }

    // Crusty Chunks
    removeOre('crusty_chunks', 'deepslate_lead',  'crusty_chunks:deepslate_lead_ore')
    removeOre('crusty_chunks', 'lead',             'crusty_chunks:lead_ore')
    removeOre('crusty_chunks', 'nickel',           'crusty_chunks:nickel_ore')
    removeOre('crusty_chunks', 'sulfur',           'crusty_chunks:sulfur_ore')

    // Galosphere
    removeOre('galosphere', 'ore_silver_small', 'galosphere:ore_silver_small')
    removeOre('galosphere', 'ore_silver_large', 'galosphere:ore_silver_large')

})