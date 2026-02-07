// KubeJS Startup Script
// Place this file in kubejs/startup_scripts/

StartupEvents.registry('item', event => {
  // Register Mechanical Whisk (Batidor Maleable)
  event.create('mechanical_whisk')
    .displayName('Batidor Maleable')
    .texture('layer0', 'kubejs:item/mechanical_whisk') // Optional: assumes texture exists
    .maxStackSize(64);

  // Register Intermediate Mechanical Whisks (Stages 1-3)
  event.create('mechanical_whisk_1')
    .displayName('Batidor Maleable')
    .texture('layer0', 'kubejs:item/mechanical_whisk_1')
    .maxStackSize(64);

  event.create('mechanical_whisk_2')
    .displayName('Batidor Maleable')
    .texture('layer0', 'kubejs:item/mechanical_whisk_2')
    .maxStackSize(64);

  event.create('mechanical_whisk_3')
    .displayName('Batidor Maleable')
    .texture('layer0', 'kubejs:item/mechanical_whisk_3')
    .maxStackSize(64);

  // Register Hot Mechanical Whisk (Batidor Forjado)
  event.create('hot_mechanical_whisk')
    .displayName('Batidor Forjado')
    .texture('layer0', 'kubejs:item/hot_mechanical_whisk')
    .maxStackSize(64);

  // Register Cogwheel Casing (Carcasa de Engranaje)
  event.create('cogwheel_casing')
    .displayName('Carcasa de Engranaje')
    .texture('layer0', 'kubejs:item/cogwheel_casing')
    .maxStackSize(64);
});
