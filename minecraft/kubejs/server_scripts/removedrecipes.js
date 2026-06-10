ServerEvents.recipes(function(event) {

    // Remove by output
    [
        // Thermal
        'thermal:redstone_servo',
        'thermal:rf_coil',
        'thermal:machine_pulverizer',
        'thermal:machine_centrifuge',
        'thermal:machine_smelter',
        'thermal:machine_press',
        'thermal:flux_magnet',
        'thermal:drill_head',
        'thermal:flux_drill',
        'thermal:area_radius_augment',
        'thermal:earth_grenade',
        'thermal:earth_tnt',

        // Iron Chests
        'ironchest:iron_chest',
        'ironchest:copper_chest',
        'ironchest:gold_chest',
        'ironchest:diamond_chest',

        // Travelers Backpack
        'travelersbackpack:netherite_tier_upgrade',
        'travelersbackpack:gold_tier_upgrade',
        'travelersbackpack:diamond_tier_upgrade',
        'travelersbackpack:iron_tier_upgrade',
        'travelersbackpack:magnet_upgrade',
        'travelersbackpack:feeding_upgrade',
        'travelersbackpack:backpack_tank',
        'travelersbackpack:blank_upgrade',

        // Refined Storage
        'refinedstorage:processor_binding',
        'refinedstorage:quartz_enriched_iron',
        'refinedstorage:raw_basic_processor',
        'refinedstorage:destruction_core',
        'refinedstorage:construction_core',
        'refinedstorage:1k_storage_part',
        'refinedstorage:machine_casing',
        'refinedstorage:disk_drive',

        // AE2
        'ae2:inscriber',
        'ae2:charger',
        'ae2:controller',
        'ae2:energy_acceptor',

        // Industrial Foregoing
        'industrialforegoing:mob_imprisonment_tool',
        'industrialforegoing:resourceful_furnace',
        'industrialforegoing:enchantment_extractor',
        'industrialforegoing:mob_duplicator',
        'industrialforegoing:stasis_chamber',

        // Enigmatic Legacy
        'enigmaticlegacy:ender_ring',
        'enigmaticlegacy:the_twist',
        'enigmaticlegacy:eldritch_pan',
        'enigmaticlegacy:the_infinitum',
        'enigmaticlegacy:eldritch_amulet',
        'enigmaticlegacy:enigmatic_elytra',
        'enigmaticlegacy:etherium_helmet',
        'enigmaticlegacy:etherium_chestplate',
        'enigmaticlegacy:etherium_leggings',
        'enigmaticlegacy:etherium_boots',
        'enigmaticlegacy:etherium_sword',
        'enigmaticlegacy:etherium_pickaxe',
        'enigmaticlegacy:etherium_axe',
        'enigmaticlegacy:etherium_shovel',
        'enigmaticlegacy:etherium_scythe',
        'enigmaticlegacy:forbidden_axe',
        'enigmaticlegacy:magnet_ring',
        'enigmaticlegacy:iron_ring',
        'enigmaticlegacy:ender_slayer',
        'enigmaticlegacy:astral_potato',
        'enigmaticlegacy:xp_scroll',
        'enigmaticlegacy:heaven_scroll',
        'enigmaticlegacy:escape_scroll',
        'enigmaticlegacy:infinimeal',
        'enigmaticlegacy:enchanter_pearl',
        'enigmaticlegacy:fabulous_scroll',
        'enigmaticlegacy:mining_charm',
        'enigmaticlegacy:the_cube',

        // Flux Networks
        'fluxnetworks:flux_core',


        // Misc
        'quarryplus:solid_fuel_quarry',
        'quarryplus:workbench',
        'naturescompass:naturescompass',
        'classicpipes:golden_pipe',
        'experienceobelisk:cognitive_flux',
        'crusty_chunks:solar_generator',
        'crusty_chunks:mineral_grinder',
        'orbital_railgun:orbital_railgun',
        'aperture_innovations:portal_gun',
        'angelring:angel_ring',
        'redstone_arsenal:flux_elytra',
        'fluxnetworks:flux_core',
        'pointblank:gunmetal_mesh',
        'pointblank:printer',
        'modularrouters:player_module',
        'modularrouters:xp_vacuum_augment',
        'modularrouters:sender_module_3',
        'modularrouters:range_up_augment',
        'modularrouters:speed_upgrade',
        'modularrouters:stack_upgrade'

    ].forEach(function(item) { event.remove({ output: item }) });

    // Remove by recipe ID
    ;[
        'redstone_arsenal:materials/flux_obsidian_rod',
        'redstone_arsenal:materials/flux_dust',
        'redstone_arsenal:materials/flux_ingot_fire_charge_from_dust',
        'redstone_arsenal:materials/flux_gem',
        'thermal:compat/redstone_arsenal/smelter_rsa_alloy_flux',
        'undergarden:catalyst',
        'experienceobelisk:precision_dispeller'

    ].forEach(function(id) { event.remove({ id: id }) });

});