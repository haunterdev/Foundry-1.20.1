ServerEvents.recipes(event => {

    event.shaped(
            Item.of('modularrouters:range_up_augment'),
            [
                    'AAA',
                    'ABA',
                    ' C '
            ],
            {
                    B: 'modularrouters:augment_core',
                    A: 'minecraft:quartz_block',
                    C: 'minecraft:blaze_rod'
            }
    )
    event.shaped(
            Item.of('modularrouters:speed_upgrade', 3),
            [
                    'ABA',
                    'CDC',
                    'EFE'
            ],
            {
                    A: 'minecraft:redstone_block',
                    D: 'minecraft:gold_ingot',
                    E: 'quark:gunpowder_sack',
                    C: 'minecraft:gold_nugget',
                    F: 'minecraft:blaze_rod',
                    B: 'thermal:netherite_plate'
            }
    )
    event.shaped(
            Item.of('modularrouters:stack_upgrade'),
            [
                    'AB ',
                    'C  ',
                    '   '
            ],
            {
                    C: 'minecraft:netherite_upgrade_smithing_template',
                    B: 'malum:block_of_blazing_quartz',
                    A: 'modularrouters:blank_upgrade'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:mining_charm'),
            [
                    'ABA',
                    'CDC',
                    'EFE'
            ],
            {
                    D: 'enigmaticlegacy:twisted_heart',
                    C: 'minecraft:gold_ingot',
                    B: 'quark:diamond_heart',
                    A: 'thermal:netherite_nugget',
                    F: 'minecraft:ghast_tear',
                    E: 'minecraft:glowstone'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:the_cube'),
            [
                    'ABC',
                    'DEF',
                    'GBH'
            ],
            {
                    C: 'enigmaticlegacy:blazing_core',
                    B: 'enigmaticlegacy:cosmic_heart',
                    F: 'enigmaticlegacy:eye_of_nebula',
                    H: 'enigmaticlegacy:void_pearl',
                    A: 'enigmaticlegacy:golem_heart',
                    D: 'enigmaticlegacy:angel_blessing',
                    E: 'enigmaticlegacy:astral_breaker',
                    G: 'enigmaticlegacy:ocean_stone'
            }
    )
});
