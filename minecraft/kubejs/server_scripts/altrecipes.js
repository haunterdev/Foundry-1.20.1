ServerEvents.recipes(event => {

        
    

        //Recipes made using https://www.curseforge.com/minecraft/mc-mods/crafting-recipe-exporter



        event.shaped(
            Item.of('thermal:redstone_servo'),
            [
                    'ABA',
                    'ACA',
                    'ABA'
            ],
            {
                    C: 'crusty_chunks:beryllium_ingot',
                    B: 'minecraft:redstone',
                    A: 'thermal:lead_nugget'
            }
    )
    event.shaped(
            Item.of('quarryplus:solid_fuel_quarry'),
            [
                    'AEA',
                    'BCB',
                    'DED'
            ],
            {
                    B: 'thermal:iron_gear',
                    E: 'minecraft:redstone_torch',
                    D: 'crusty_chunks:lithium_block',
                    C: 'industrialforegoing:block_breaker',
                    A: 'minecraft:diamond_pickaxe'
            }
    )
    event.shaped(
            Item.of('thermal:rf_coil'),
            [
                    '  A',
                    'BCB',
                    'A  '
            ],
            {
                    C: 'thermal:redstone_servo',
                    A: 'minecraft:gold_ingot',
                    B: 'minecraft:redstone'
            }
    )
    event.shapeless(
            Item.of('redstone_arsenal:flux_ingot'),
            [
                    'minecraft:quartz',
                    'minecraft:redstone',
                    'thermal:gold_dust',
                    'thermal:gold_dust',
                    'minecraft:redstone',
                    'minecraft:glowstone_dust',
                    'minecraft:fire_charge'
            ]
    )
    event.shapeless(
            Item.of('redstone_arsenal:flux_gem'),
            [
                    'minecraft:diamond',
                    'thermal:lapis_dust',
                    'minecraft:redstone',
                    'minecraft:redstone',
                    'minecraft:redstone',
                    'minecraft:redstone'
            ]
        )
    event.shaped(
            Item.of('ironchest:copper_chest'),
            [
                    'ABA',
                    'ACA',
                    'ABA'
            ],
            {
                    C: '#forge:chests/wooden',
                    B: 'minecraft:copper_block',
                    A: 'minecraft:copper_ingot'
            }
    )
    event.shaped(
            Item.of('ironchest:iron_chest'),
            [
                    'AAA',
                    'ABA',
                    'AAA'
            ],
            {
                    B: 'ironchest:copper_chest',
                    A: 'minecraft:iron_ingot'
            }
    )
    event.shaped(
            Item.of('ironchest:iron_chest'),
            [
                    'ABA',
                    'ACA',
                    'ABA'
            ],
            {
                    A: 'minecraft:iron_ingot',
                    B: 'minecraft:iron_block',
                    C: '#forge:chests/wooden'
            }
    )
    event.shaped(
            Item.of('ironchest:gold_chest'),
            [
                    'AAA',
                    'ABA',
                    'AAA'
            ],
            {
                    A: 'minecraft:gold_ingot',
                    B: 'ironchest:iron_chest'
            }
    )
    event.shaped(
            Item.of('ironchest:gold_chest'),
            [
                    'ABA',
                    'ACA',
                    'ABA'
            ],
            {
                    A: 'minecraft:gold_ingot',
                    C: '#forge:chests/wooden',
                    B: 'minecraft:gold_block'
            }
    )
    event.shaped(
            Item.of('ironchest:diamond_chest'),
            [
                    'ABA',
                    'ACA',
                    'ABA'
            ],
            {
                    B: 'minecraft:diamond_block',
                    C: '#forge:chests/wooden',
                    A: 'minecraft:diamond'
            }
    )
    event.shaped(
            Item.of('ironchest:diamond_chest'),
            [
                    'AAA',
                    'ABA',
                    'AAA'
            ],
            {
                    A: 'minecraft:diamond',
                    B: 'ironchest:gold_chest'
            }
    )
    event.shaped(
            Item.of('redstone_arsenal:flux_dust'),
            [
                    'ABC',
                    'CBD',
                    '   '
            ],
            {
                    D: 'minecraft:glowstone_dust',
                    A: 'minecraft:quartz',
                    B: 'minecraft:redstone',
                    C: 'thermal:gold_dust'
            }
    )
    event.shaped(
            Item.of('undergarden:catalyst'),
            [
                    'ABA',
                    'CDC',
                    'ABA'
            ],
            {
                    A: 'redstone_arsenal:flux_ingot',
                    D: 'thermal:signalum_plate',
                    B: 'crusty_chunks:pyrochlore_block',
                    C: 'crusty_chunks:lithium_block'
            }
    )

    event.shaped(
            Item.of('classicpipes:golden_pipe', 12),
            [
                    '   ',
                    'ABC',
                    ' D '
            ],
            {
                    A: 'minecraft:gold_ingot',
                    C: 'crusty_chunks:zinc_ingot',
                    B: 'minecraft:glass',
                    D: 'crusty_chunks:lithium_ingot'
            }
    )
    event.shaped(
            Item.of('naturescompass:naturescompass'),
            [
                    'ABE',
                    'BDB',
                    'EBF'
            ],
            {
                    
                    E: 'crusty_chunks:zinc_ingot',
                    D: 'ae2:meteorite_compass',
                    F: 'galosphere:allurite_shard',
                    B: '#minecraft:saplings',
                    A: 'galosphere:lumiere_shard'
            }
    )
    event.shapeless(
            Item.of('experienceobelisk:cognitive_flux', 4),
            [
                    'thermal:lapis_dust',
                    'thermal:iron_dust',
                    'netherexp:soul_magma_block',
                    'thermal:quartz_dust'
            ]
    )
    event.shaped(
            Item.of('crusty_chunks:solar_generator'),
            [
                    'ABA',
                    'CDC',
                    ' E '
            ],
            {
                    A: 'crusty_chunks:aluminum_plate',
                    E: 'crusty_chunks:advanced_component',
                    C: 'crusty_chunks:lithium_ingot',
                    D: 'crusty_chunks:cable',
                    B: 'minecraft:daylight_detector'
            }
    )
    event.shaped(
            Item.of('thermal:machine_pulverizer'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    D: 'thermal:lead_gear',
                    B: 'minecraft:flint',
                    C: 'thermal:machine_frame',
                    A: 'thermal:device_nullifier',
                    E: 'thermal:rf_coil'
            }
    )

    event.shaped(
            Item.of('redstone_arsenal:flux_obsidian_rod'),
            [
                    '  B',
                    ' C ',
                    'B  '
            ],
            {
                    B: 'redstone_arsenal:flux_gem',
                    C: 'redstone_arsenal:obsidian_rod'
                    
            }
    )
    event.shaped(
            Item.of('thermal:flux_magnet'),
            [
                    'A A',
                    'CDC',
                    ' E '
            ],
            {
                   
                    A: 'minecraft:iron_block',
                    C: 'crusty_chunks:lead_ingot',
                    D: 'thermal:electrum_ingot',
                    E: 'thermal:rf_coil'
            }
    )
    event.shaped(
            Item.of('travelersbackpack:magnet_upgrade'),
            [
                    'ABA',
                    'CDE',
                    'CFE'
            ],
            {
                    A: 'minecraft:ender_pearl',
                    C: 'minecraft:redstone',
                    D: 'travelersbackpack:blank_upgrade',
                    E: 'minecraft:lapis_lazuli',
                    F: 'thermal:bronze_block',
                    B: 'thermal:flux_magnet'
            }
    )
    event.shaped(
            Item.of('travelersbackpack:backpack_tank'),
            [
                    'A A',
                    'ACA',
                    'A A'
            ],
            {
                    C: 'thermal:iron_gear',
                    A: 'minecraft:glass'
                    
            }
    )
    event.shaped(
            Item.of('travelersbackpack:blank_upgrade', 4),
            [
                    'ABC',
                    'BDB',
                    'EBF'
            ],
            {
                    C: 'minecraft:gunpowder',
                    E: 'minecraft:flint',
                    D: 'minecraft:leather',
                    F: 'minecraft:ink_sac',
                    B: 'minecraft:string',
                    A: 'minecraft:book'
            }
    )
    event.shaped(
            Item.of('refinedstorage:processor_binding', 4),
            [
                    '   ',
                    'ABA',
                    '   '
            ],
            {
                    B: '#forge:slimeballs',
                    A: 'minecraft:string'
            }
    )
    event.shaped(
            Item.of('refinedstorage:processor_binding', 4),
            [
                    'A B',
                    ' B ',
                    'B A'
            ],
            {
                    B: 'thermal:tar',
                    A: 'minecraft:string'
            }
    )
    event.shaped(
            Item.of('refinedstorage:quartz_enriched_iron', 5),
            [
                    ' A ',
                    'ABA',
                    ' C '
            ],
            {
                    C: 'minecraft:soul_sand',
                    A: 'minecraft:iron_ingot',
                    B: 'minecraft:quartz'
            }
    )
    event.shaped(
            Item.of('refinedstorage:raw_basic_processor'),
            [
                    'AB ',
                    'CD ',
                    '   '
            ],
            {
                    D: 'minecraft:redstone',
                    B: 'refinedstorage:quartz_enriched_iron',
                    A: 'refinedstorage:processor_binding',
                    C: 'refinedstorage:silicon'
            }
    )
    event.shaped(
            Item.of('refinedstorage:destruction_core'),
            [
                    'AB ',
                    'C  ',
                    '   '
            ],
            {
                    C: 'thermal:quartz_dust',
                    B: 'thermal:nickel_dust',
                    A: 'refinedstorage:basic_processor'
            }
    )
    event.shaped(
            Item.of('refinedstorage:construction_core'),
            [
                    'AB ',
                    'C  ',
                    '   '
            ],
            {
                    B: 'minecraft:glowstone_dust',
                    C: '#forge:dusts/lead',
                    A: 'refinedstorage:basic_processor'
            }
    )
    event.shaped(
            Item.of('refinedstorage:1k_storage_part'),
            [
                    'ABA',
                    'CDC',
                    'AEA'
            ],
            {
                    C: '#forge:glass',
                    E: 'thermal:obsidian_glass',
                    D: 'minecraft:redstone',
                    B: 'refinedstorage:quartz_enriched_iron',
                    A: 'refinedstorage:silicon'
            }
    )
    event.shaped(
            Item.of('thermal:drill_head'),
            [
                    ' A ',
                    'ABA',
                    ' C '
            ],
            {
                    B: 'thermal:silver_gear',
                    C: 'minecraft:copper_block',
                    A: 'thermal:saw_blade'
            }
    )
    event.shaped(
            Item.of('thermal:flux_drill'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    A: 'thermal:drill_head',
                    B: 'crusty_chunks:beryllium_block',
                    C: 'thermal:gold_gear',
                    D: 'thermal:tin_gear',
                    E: 'thermal:rf_coil'
            }
    )
    event.shaped(
            Item.of('ae2:inscriber'),
            [
                    'ABA',
                    'C A',
                    'ABA'
            ],
            {
                    B: 'minecraft:sticky_piston',
                    A: 'refinedstorage:quartz_enriched_iron',
                    C: 'crusty_chunks:lithium_ingot'
            }
    )
    event.shaped(
            Item.of('refinedstorage:machine_casing'),
            [
                    'AAA',
                    'ABA',
                    'AAA'
            ],
            {
                    A: 'refinedstorage:quartz_enriched_iron',
                    B: 'thermal:machine_frame'
            }
    )
    event.shaped(
            Item.of('refinedstorage:disk_drive'),
            [
                    'ABA',
                    'ACA',
                    'ADA'
            ],
            {
                    D: 'refinedstorage:advanced_processor',
                    A: 'refinedstorage:quartz_enriched_iron',
                    C: 'refinedstorage:machine_casing',
                    B: 'computercraft:turtle_normal'
            }
    )
    event.shaped(
            Item.of('industrialforegoing:mob_imprisonment_tool'),
            [
                    'AAA',
                    'ABA',
                    'ACA'
            ],
            {
                    A: 'industrialforegoing:plastic',
                    B: 'minecraft:ghast_tear',
                    C: 'thermal:upgrade_augment_2'
            }
    )
    event.shaped(
            Item.of('minecraft:sticky_piston'),
            [
                    ' A ',
                    ' B ',
                    '   '
            ],
            {
                    A: 'thermal:tar',
                    B: 'minecraft:piston'
            }
    )
    event.shaped(
            Item.of('travelersbackpack:feeding_upgrade'),
            [
                    'AAA',
                    'BCD',
                    'EEE'
            ],
            {
                    A: 'thermal:niter',
                    D: 'minecraft:golden_apple',
                    C: 'travelersbackpack:blank_upgrade',
                    E: 'minecraft:redstone',
                    B: 'minecraft:golden_carrot'
            }
    )
    event.shaped(
            Item.of('crusty_chunks:mineral_grinder'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    B: 'minecraft:iron_ingot',
                    D: 'minecraft:iron_nugget',
                    A: 'minecraft:iron_bars',
                    C: 'thermal:machine_pulverizer',
                    E: 'minecraft:piston'
            }
    )
    event.shaped(
            Item.of('thermal:area_radius_augment'),
            [
                    ' A ',
                    'BCB',
                    'DAD'
            ],
            {
                    A: 'thermal:iron_gear',
                    C: 'thermal:redstone_servo',
                    D: 'thermal:tin_ingot',
                    B: 'thermal:cured_rubber'
            }
    )

    event.shaped(
            Item.of('travelersbackpack:iron_tier_upgrade'),
            [
                    'ABA',
                    'ACA',
                    'AAA'
            ],
            {
                    A: 'pointblank:gunmetal_mesh',
                    B: 'minecraft:iron_block',
                    C: 'travelersbackpack:blank_upgrade'
            }
    )
    event.shaped(
            Item.of('travelersbackpack:diamond_tier_upgrade'),
            [
                    'ABA',
                    'BCB',
                    'BDB'
            ],
            {
                    D: 'minecraft:diamond_block',
                    B: 'minecraft:iron_ingot',
                    C: 'travelersbackpack:blank_upgrade',
                    A: 'thermal:signalum_gear'
            }
    )

    event.shaped(
            Item.of('thermal:earth_grenade'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    B: 'thermal:basalz_powder',
                    C: 'minecraft:iron_block',
                    A: 'minecraft:tnt'
            }
    )
    event.shaped(
            Item.of('thermal:earth_tnt'),
            [
                    'ABA',
                    'BCB',
                    'ABD'
            ],
            {
                    A: 'minecraft:gunpowder',
                    B: 'thermal:basalz_powder',
                    D: 'thermal:gunpowder_block',
                    C: 'refinedstorage:destruction_core'
            }
    )
    event.shapeless(
            Item.of('kubejs:jade_alloy_blend', 2),
            [
                    'undergarden:regalium_crystal',
                    'undergarden:regalium_crystal',
                    'undergarden:utheric_shard',
                    'undergarden:utheric_shard',
                    'undergarden:utheric_shard',
                    'undergarden:cloggrum_ingot',
                    'undergarden:cloggrum_ingot',
                    'undergarden:utheric_shard'
            ]
    )
    event.shaped(
            Item.of('kubejs:jade_alloy_gear'),
            [
                    ' A ',
                    'ABA',
                    ' A '
            ],
            {
                    A: 'kubejs:jade_alloy_ingot',
                    B: 'thermal:cinnabar'
            }
    )

    event.shaped(
            Item.of('thermal:machine_press'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    B: '#forge:ingots/bronze',
                    A: 'crusty_chunks:beryllium_block',
                    D: 'kubejs:jade_alloy_gear',
                    C: 'thermal:machine_frame',
                    E: 'thermal:rf_coil'
            }
    )
    event.shaped(
            Item.of('thermal:machine_centrifuge'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    A: 'ae2:meteorite_compass',
                    B: '#forge:ingots/tin',
                    D: 'kubejs:jade_alloy_gear',
                    C: 'thermal:machine_frame',
                    E: 'thermal:rf_coil'
            }
    )
    event.shaped(
            Item.of('ae2:charger'),
            [
                    'AAA',
                    'A B',
                    'AAA'
            ],
            {
                    A: 'pointblank:gunmetal_mesh',
                    B: 'thermal:lapis_gear'
            }
    )
    event.shaped(
            Item.of('kubejs:verdant_alloy_blend', 4),
            [
                    'AAA',
                    'BCC',
                    'DBB'
            ],
            {
                    C: 'thermal:enderium_dust',
                    D: 'tcintegrations:molten_froststeel_bucket',
                    A: 'thermal:signalum_dust',
                    B: 'kubejs:jade_alloy_blend'
            }
    )
    event.shaped(
            Item.of('kubejs:verdant_alloy_gear'),
            [
                    ' AB',
                    'ACA',
                    'DA '
            ],
            {
                    B: 'undergarden:virulent_mix_bucket',
                    A: 'kubejs:verdant_alloy_ingot',
                    D: 'undergarden:forgotten_nugget',
                    C: 'kubejs:jade_alloy_gear'
            }
    )
    event.shaped(
            Item.of('quarryplus:workbench'),
            [
                    'AEA',
                    'CDC',
                    'AFA'
            ],
            {
                    A: 'minecraft:iron_ingot',
                    D: 'malum:runic_workbench',
                    F: 'kubejs:jade_alloy_gear',
                    C: 'malum:cthonic_gold',
                    E: 'thermal:silver_block'
            }
    )
    event.shaped(
            Item.of('industrialforegoing:enchantment_extractor'),
            [
                    'ABA',
                    'CDC',
                    'AEA'
            ],
            {
                    A: 'industrialforegoing:plastic',
                    E: 'thermal:signalum_plate',
                    D: 'industrialforegoing:machine_frame_supreme',
                    C: 'minecraft:book',
                    B: 'undergarden:forgotten_upgrade_smithing_template'
            }
    )
    event.shaped(
            Item.of('industrialforegoing:mob_duplicator'),
            [
                    'ABA',
                    'CDC',
                    'EFE'
            ],
            {
                    A: 'industrialforegoing:plastic',
                    B: 'undergarden:virulent_mix_bucket',
                    C: 'minecraft:emerald',
                    F: 'experienceobelisk:cognitive_alloy',
                    D: 'industrialforegoing:machine_frame_advanced',
                    E: 'kubejs:jade_alloy_gear'
            }
    )
    event.shaped(
            Item.of('industrialforegoing:stasis_chamber'),
            [
                    'ABA',
                    'CDC',
                    'EFE'
            ],
            {
                    B: 'netherexp:soul_glass',
                    F: 'minecraft:sticky_piston',
                    E: 'kubejs:verdant_alloy_gear',
                    C: 'minecraft:ghast_tear',
                    D: 'industrialforegoing:machine_frame_advanced',
                    A: 'netherexp:ecto_soul_sand'
            }
    )

    event.shaped(
            Item.of('ae2:energy_acceptor'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    A: 'refinedstorage:quartz_enriched_iron',
                    B: 'ae2:quartz_glass',
                    C: 'crusty_chunks:lithium_ingot'
            }
    )
    event.shaped(
            Item.of('kubejs:saviours_alloy_blend', 2),
            [
                    'ABC',
                    'DEF',
                    'GHG'
            ],
            {
                    A: 'fluxnetworks:flux_block',
                    E: 'kubejs:verdant_alloy_gear',
                    C: 'crusty_chunks:uranium_enriched_block',
                    B: 'crusty_chunks:ordinance_inline_fusion_warhead_stage_1',
                    H: 'expandedae:artificial_universe_item_cell',
                    G: 'thermal:enderium_block',
                    D: 'redstone_arsenal:flux_metal_block',
                    F: 'crusty_chunks:advanced_alloy_block'
            }
    )
    event.shaped(
            Item.of('kubejs:saviours_alloy_gear'),
            [
                    ' A ',
                    'ABA',
                    ' A '
            ],
            {
                    A: 'kubejs:saviours_alloy_ingot',
                    B: 'industrialforegoing:machine_frame_supreme'
            }
    )
    event.shaped(
            Item.of('aperture_innovations:portal_gun'),
            [
                    'AB ',
                    'BCB',
                    ' BD'
            ],
            {
                    D: 'minecraft:ender_eye',
                    A: 'galosphere:allurite_shard',
                    B: 'minecraft:netherite_ingot',
                    C: 'kubejs:saviours_alloy_gear'
            }
    )
    event.shaped(
            Item.of('orbital_railgun:orbital_railgun'),
            [
                    ' A ',
                    'BCB',
                    'D D'
            ],
            {
                    A: 'pointblank:gm6lynx',
                    D: 'kubejs:saviours_alloy_gear',
                    B: 'crusty_chunks:advanced_alloy_ingot',
                    C: 'enigmaticlegacy:the_cube'
            }
    )
    event.shaped(
            Item.of('fluxnetworks:flux_core', 4),
            [
                    'ABC',
                    'BDB',
                    'ABA'
            ],
            {
                    A: 'fluxnetworks:flux_dust',
                    D: 'minecraft:ender_eye',
                    C: 'kubejs:verdant_alloy_blend',
                    B: 'minecraft:obsidian'
            }
    )
    event.shaped(
            Item.of('angelring:angel_ring'),
            [
                    ' A ',
                    'BCB',
                    ' D '
            ],
            {
                    B: 'kubejs:verdant_alloy_gear',
                    C: 'angelring:diamond_ring',
                    D: 'kubejs:saviours_alloy_blend',
                    A: 'crusty_chunks:ordinance_inline_fusion_warhead_stage_2'
            }
    )
    event.shaped(
            Item.of('industrialforegoing:resourceful_furnace'),
            [
                    'ABA',
                    'CDE',
                    'AFA'
            ],
            {
                    A: 'industrialforegoing:plastic',
                    C: 'industrialforegoing:machine_frame_pity',
                    B: 'minecraft:bucket',
                    D: 'thermal:machine_furnace',
                    F: 'industrialforegoing:gold_gear',
                    E: 'minecraft:furnace'
            }
    )
        event.shaped(
        'pointblank:printer', 
        [
            'AAA', 
            'BDC', 
            'AAA'  
        ],
        {
            A: 'pointblank:gunmetal_ingot',
            B: 'industrialforegoing:machine_frame_pity',
            C: 'computercraft:printer',
            D: 'thermal:constantan_gear',
        }
    )

   event.shapeless(
            Item.of('pointblank:gunmetal_mesh'),
            [
                    'minecraft:copper_ingot',
                    'minecraft:iron_ingot'
            ]
    )
    event.shaped(
            Item.of('minecraft:dragon_head'),
            [
                    '   ',
                    ' A ',
                    ' B '
            ],
            {
                    B: 'kubejs:saviours_alloy_ingot',
                    A: '#forge:heads'
            }
    )
    event.shaped(
            Item.of('travelersbackpack:gold_tier_upgrade'),
            [
                    'AAA',
                    'ABA',
                    'CDC'
            ],
            {
                    A: 'minecraft:gold_ingot',
                    B: 'travelersbackpack:blank_upgrade',
                    C: 'malum:cthonic_gold_fragment',
                    D: 'thermal:upgrade_augment_1'
            }
    )
    event.shaped(
            Item.of('travelersbackpack:netherite_tier_upgrade'),
            [
                    'ABA',
                    'ACA',
                    'ADA'
            ],
            {
                    D: 'minecraft:netherite_upgrade_smithing_template',
                    A: 'redstone_arsenal:flux_ingot',
                    C: 'travelersbackpack:blank_upgrade',
                    B: 'thermal:netherite_plate'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:enigmatic_elytra'),
            [
                    'ABA',
                    'CDC',
                    'EFE'
            ],
            {
                    C: 'enigmaticlegacy:etherium_block',
                    F: 'enigmaticlegacy:eye_of_nebula',
                    A: 'minecraft:dragon_breath',
                    E: 'enigmaticlegacy:astral_block',
                    B: 'enigmaticlegacy:angel_blessing',
                    D: 'redstone_arsenal:flux_elytra'
            }
    )
    event.shaped(
            Item.of('redstone_arsenal:flux_elytra'),
            [
                    'ABA',
                    'CDC',
                    'AEA'
            ],
            {
                    E: 'kubejs:verdant_alloy_gear',
                    B: 'redstone_arsenal:flux_obsidian_rod',
                    A: 'redstone_arsenal:flux_plating',
                    C: 'redstone_arsenal:flux_metal_block',
                    D: 'minecraft:elytra'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:etherium_helmet'),
            [
                    'AAA',
                    'ABA',
                    ' C '
            ],
            {
                    C: 'kubejs:verdant_alloy_ingot',
                    B: 'redstone_arsenal:flux_helmet',
                    A: 'enigmaticlegacy:etherium_ingot'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:etherium_chestplate'),
            [
                    'ABA',
                    'ACA',
                    'AAA'
            ],
            {
                    C: 'redstone_arsenal:flux_chestplate',
                    B: 'kubejs:verdant_alloy_ingot',
                    A: 'enigmaticlegacy:etherium_ingot'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:etherium_leggings'),
            [
                    'AAA',
                    'ABA',
                    'ACA'
            ],
            {
                    B: 'kubejs:verdant_alloy_ingot',
                    C: 'redstone_arsenal:flux_leggings',
                    A: 'enigmaticlegacy:etherium_ingot'
            }
        )
    event.shaped(
            Item.of('enigmaticlegacy:etherium_sword'),
            [
                    ' AB',
                    ' BC',
                    'D  '
            ],
            {
                    A: 'kubejs:verdant_alloy_gear',
                    C: 'redstone_arsenal:flux_sword',
                    D: 'enigmaticlegacy:ender_rod',
                    B: 'enigmaticlegacy:etherium_ingot'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:etherium_pickaxe'),
            [
                    'AAA',
                    'BCD',
                    ' C '
            ],
            {
                    B: 'kubejs:verdant_alloy_gear',
                    C: 'enigmaticlegacy:ender_rod',
                    A: 'enigmaticlegacy:etherium_ingot',
                    D: 'redstone_arsenal:flux_pickaxe'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:etherium_axe'),
            [
                    'ABC',
                    'CDE',
                    ' D '
            ],
            {
                    A: 'enigmaticlegacy:etherium_block',
                    E: 'kubejs:verdant_alloy_gear',
                    D: 'enigmaticlegacy:ender_rod',
                    C: 'enigmaticlegacy:etherium_ingot',
                    B: 'redstone_arsenal:flux_axe'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:etherium_shovel'),
            [
                    ' A ',
                    'BCD',
                    ' C '
            ],
            {
                    D: 'redstone_arsenal:flux_excavator',
                    B: 'kubejs:verdant_alloy_ingot',
                    C: 'enigmaticlegacy:ender_rod',
                    A: 'enigmaticlegacy:etherium_ingot'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:etherium_scythe'),
            [
                    ' AA',
                    'BCD',
                    ' C '
            ],
            {
                    B: 'kubejs:verdant_alloy_ingot',
                    C: 'enigmaticlegacy:ender_rod',
                    D: 'redstone_arsenal:flux_sickle',
                    A: 'enigmaticlegacy:etherium_ingot'
            }
    )
    event.shaped(
            Item.of('thermal:machine_smelter'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    C: 'industrialforegoing:machine_frame_simple',
                    A: 'industrialforegoing:resourceful_furnace',
                    B: 'malum:chunk_of_brilliance',
                    D: 'thermal:invar_gear',
                    E: 'thermal:rf_coil'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:magnet_ring'),
            [
                    ' A ',
                    'BCD',
                    ' E '
            ],
            {
                    A: 'minecraft:redstone_block',
                    B: 'minecraft:lapis_block',
                    D: 'enigmaticlegacy:iron_ring',
                    E: 'thermal:enderium_plate',
                    C: 'thermal:flux_magnet'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:iron_ring'),
            [
                    'ABC',
                    'B B',
                    'DBE'
            ],
            {
                    C: 'crusty_chunks:lithium_nugget',
                    E: 'crusty_chunks:lead_nugget',
                    B: 'minecraft:iron_ingot',
                    D: 'minecraft:gold_nugget',
                    A: 'thermal:copper_nugget'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:forbidden_axe'),
            [
                    'ABA',
                    'CDE',
                    ' F '
            ],
            {
                    D: 'minecraft:blaze_powder',
                    A: 'minecraft:netherite_ingot',
                    B: 'minecraft:wither_skeleton_skull',
                    F: 'minecraft:blaze_rod',
                    E: 'minecraft:netherite_axe',
                    C: 'minecraft:netherite_sword'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:ender_slayer'),
            [
                    'ABA',
                    'CDC',
                    'EFE'
            ],
            {
                    C: 'minecraft:ender_eye',
                    E: 'minecraft:ghast_tear',
                    F: 'redstone_arsenal:flux_obsidian_rod',
                    A: 'enigmaticlegacy:evil_essence',
                    D: 'minecraft:obsidian',
                    B: 'minecraft:netherite_sword'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:astral_potato'),
            [
                    'ABA',
                    'CDE',
                    'AFA'
            ],
            {
                    C: 'minecraft:cooked_porkchop',
                    D: 'enigmaticlegacy:astral_dust',
                    A: 'minecraft:gold_nugget',
                    E: 'minecraft:baked_potato',
                    F: 'minecraft:cooked_beef',
                    B: 'minecraft:golden_carrot'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:xp_scroll'),
            [
                    'ABA',
                    'CDE',
                    'AFA'
            ],
            {
                    D: 'experienceobelisk:experience_obelisk',
                    C: 'minecraft:ink_sac',
                    B: 'minecraft:ender_eye',
                    E: 'minecraft:emerald',
                    F: 'enigmaticlegacy:thicc_scroll',
                    A: 'minecraft:experience_bottle'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:ender_ring'),
            [
                    ' A ',
                    'BCB',
                    'DED'
            ],
            {
                    A: 'minecraft:ender_chest',
                    C: 'enigmaticlegacy:golden_ring',
                    E: 'minecraft:ender_eye',
                    D: 'minecraft:gold_nugget',
                    B: 'kubejs:jade_alloy_ingot'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:enchanter_pearl'),
            [
                    ' A ',
                    'BCD',
                    'EFE'
            ],
            {
                    C: 'minecraft:ender_pearl',
                    A: 'minecraft:emerald',
                    E: 'minecraft:blaze_powder',
                    B: 'kubejs:jade_alloy_ingot',
                    D: 'enigmaticlegacy:evil_ingot',
                    F: 'minecraft:crying_obsidian'
            }
    )
    event.shaped(
            Item.of('enigmaticlegacy:fabulous_scroll'),
            [
                    'ABA',
                    'BCB',
                    'DED'
            ],
            {
                    C: 'angelring:diamond_ring',
                    E: 'kubejs:verdant_alloy_gear',
                    B: 'enigmaticlegacy:astral_dust',
                    A: 'enigmaticlegacy:etherium_ingot',
                    D: 'enigmaticlegacy:evil_ingot'
            }
    )
});
