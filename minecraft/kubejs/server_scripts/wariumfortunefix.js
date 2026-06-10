ServerEvents.blockLootTables(event => {

    const addOreDrop = (block, drop) => {
        event.addBlock(block, loot => {
            loot.addPool(pool => {
                pool.rolls = 1
                pool.addItem(drop)
                pool.addFunction({ function: "minecraft:apply_bonus", enchantment: "minecraft:fortune", formula: "minecraft:ore_drops" })
                pool.addFunction({ function: "minecraft:explosion_decay" })
            })
        })
    }

    // block                          drop
    addOreDrop('crusty_chunks:uranium_ore',   'crusty_chunks:raw_uranium')
    addOreDrop('crusty_chunks:zinc_ore',      'crusty_chunks:raw_zinc')
    addOreDrop('crusty_chunks:beryllium_ore', 'crusty_chunks:raw_beryllium')
    addOreDrop('crusty_chunks:lithium_ore',   'crusty_chunks:raw_lithium')
    addOreDrop('crusty_chunks:pyrochlore_ore','crusty_chunks:pyrochlore') // note: no raw_ prefix

})