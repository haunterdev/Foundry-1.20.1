// Remove crusty_chunks ores from worldgen (applies to new chunks)
// Uses the AllTheMods pattern: WorldgenEvents.remove -> removeOres
WorldgenEvents.remove(e => {
  e.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "crusty_chunks:lead_ore",
      "crusty_chunks:deepslate_lead_ore",
      "crusty_chunks:nickel_ore",
      "crusty_chunks:sulfur_ore",
      "galosphere:silver_ore",
      "galosphere:deepslate_silver_ore"
    ];
  });
});

