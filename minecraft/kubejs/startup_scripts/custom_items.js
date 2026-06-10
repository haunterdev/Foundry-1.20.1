StartupEvents.registry('item', event => {

    const items = [
        // [id,                    color, display name]
        ['jade_alloy_ingot',      '§2', 'Jade Alloy Ingot'],
        ['jade_alloy_blend',      '§2', 'Jade Alloy Blend'],
        ['jade_alloy_gear',       '§2', 'Jade Alloy Gear'],
        ['verdant_alloy_ingot',   '§d', 'Verdant Alloy Ingot'],
        ['verdant_alloy_blend',   '§d', 'Verdant Alloy Blend'],
        ['verdant_alloy_gear',    '§d', 'Verdant Alloy Gear'],
        ['saviours_alloy_ingot',  '§3', 'Saviours Alloy Ingot'],
        ['saviours_alloy_blend',  '§3', 'Saviours Alloy Blend'],
        ['saviours_alloy_gear',   '§3', 'Saviours Alloy Gear'],
    ]

    items.forEach(([id, color, name]) => {
        event.create(id).displayName(`${color}${name}`)
    })

    console.info('KubeJS: Custom items registered (startup)')
})

StartupEvents.registry('creative_mode_tab', event => {
    event.create('foundry_custom')
        .displayName(Component.literal('Foundry Custom Items'))
        .icon(() => Item.of('kubejs:verdant_alloy_ingot'))
        .content(() => [
            'kubejs:jade_alloy_ingot',
            'kubejs:jade_alloy_blend',
            'kubejs:jade_alloy_gear',
            'kubejs:verdant_alloy_ingot',
            'kubejs:verdant_alloy_blend',
            'kubejs:verdant_alloy_gear',
            'kubejs:saviours_alloy_ingot',
            'kubejs:saviours_alloy_blend',
            'kubejs:saviours_alloy_gear',
        ].map(id => Item.of(id)))
})

Platform.mods.kubejs.name = 'Foundry'