ItemEvents.tooltip(event => {
  const disabledItems = [
    'enigmaticlegacy:eldritch_amulet',
    'enigmaticlegacy:the_infinitum',
    'enigmaticlegacy:eldritch_pan',
    'enigmaticlegacy:the_twist',
    'enigmaticlegacy:escape_scroll',
    'enigmaticlegacy:heaven_scroll',
    'enigmaticlegacy:infinimeal',




  ]

  // Using addAdvanced ensures we can insert it at the top (index 1)
  event.addAdvanced(disabledItems, (stack, advanced, text) => {
    text.add(1, Text.red('THIS ITEM IS DISABLED').bold())
  })
})