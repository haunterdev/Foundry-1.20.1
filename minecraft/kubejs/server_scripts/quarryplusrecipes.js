ServerEvents.recipes(event => {
  // 1. Remove the original recipe
  event.remove({ id: 'quarryplus:adv_quarry' })

  // 2. Add the new one using the mod's specific format
  event.custom({
    type: "quarryplus:workbench_recipe",
    energy: 5000000.0, // Match the energy scale from your log
    ingredients: [
      { count: 5, item: "quarryplus:quarry" },
      { count: 3, item: "quarryplus:pump_plus" },
      { count: 16, item: "quarryplus:flex_marker" },
      { count: 16, item: "minecraft:diamond_block" },
      { count: 32, item: "minecraft:emerald_block" },
      { count: 64, item: "minecraft:ender_eye" },
      { count: 3, item: "kubejs:verdant_alloy_gear" },
      { count: 4, item: "minecraft:nether_star" },
      { count: 3, item: "minecraft:dragon_head" }
    ],
    result: {
      count: 1,
      item: "quarryplus:adv_quarry"
    },
    showInJEI: true,
    subType: "default" // This field is likely mandatory for the machine to "see" it
  }).id('kubejs:new_chunk_destroyer')
})