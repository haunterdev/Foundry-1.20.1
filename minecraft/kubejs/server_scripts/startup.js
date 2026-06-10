ServerEvents.tags('item', event => {
  
  event.add('forge:ingots', [
    'kubejs:verdant_alloy_ingot',
    'kubejs:jade_alloy_ingot',
    'kubejs:saviours_alloy_ingot'
  ])

  
  event.add('forge:dusts', [
    'kubejs:jade_alloy_blend',
    'kubejs:saviours_alloy_blend',
    'kubejs:verdant_alloy_blend'
  ])

  event.add('forge:gears', [
    'kubejs:jade_alloy_gear',
    'kubejs:saviours_alloy_gear',
    'kubejs:verdant_alloy_gear'
  ])
})