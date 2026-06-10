ServerEvents.recipes(event => {

    const addSmeltingPair = (name, xp, smeltTime) => {
        const output = `kubejs:${name}_ingot`
        const input  = `kubejs:${name}_blend`
        event.smelting(output, input).xp(xp).cookingTime(smeltTime)   .id(`kubejs:smelting/${name}_ingot_from_blend`)
        event.blasting(output, input).xp(xp).cookingTime(smeltTime / 2).id(`kubejs:blasting/${name}_ingot_from_blend`)
    }

    addSmeltingPair('jade_alloy',     3.0,  400)
    addSmeltingPair('verdant_alloy',  4.0,  500)
    addSmeltingPair('saviours_alloy', 10.0, 600)

})