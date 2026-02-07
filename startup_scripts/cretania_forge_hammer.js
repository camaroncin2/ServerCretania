// KubeJS Startup Script
// Place this file in kubejs/startup_scripts/

StartupEvents.registry('item', event => {
  // Register Forge Hammer MK1 (Forjador MK1)
  event.create('forge_hammer_mk1')
    .displayName('Forjador MK1')
    .maxStackSize(1)
    .parentModel('kubejs:item/cretania_forge_hammer') // Usa el modelo JSON compartido
    .rarity('uncommon');

  // Register Forge Hammer MK2 (Forjador MK2)
  event.create('forge_hammer_mk2')
    .displayName('Forjador MK2')
    .maxStackSize(1)
    .parentModel('kubejs:item/cretania_forge_hammer') // Usa el modelo JSON compartido
    .rarity('rare');

  // Register Forge Hammer MK3 (Forjador MK3)
  event.create('forge_hammer_mk3')
    .displayName('Forjador MK3')
    .maxStackSize(1)
    .parentModel('kubejs:item/cretania_forge_hammer') // Usa el modelo JSON compartido
    .rarity('epic');
});
