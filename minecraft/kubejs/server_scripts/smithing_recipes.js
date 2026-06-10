ServerEvents.recipes(event => {

    event.smithing(
        'experienceobelisk:precision_dispeller',           // Output
        'undergarden:forgotten_upgrade_smithing_template', // Template
        'industrialforegoing:enchantment_extractor',       // Base
        'thermal:upgrade_augment_2'                        // Addition
    ).id('kubejs:custom_precision_dispeller_recipe')

})