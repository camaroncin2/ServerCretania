// KubeJS Startup Script
// Place this file in kubejs/startup_scripts/

StartupEvents.registry('item', event => {
  // Register Mechanical Blade (Disco Maleable)
  event.create('mechanical_blade')
    .displayName('Disco Maleable')
    .texture('layer0', 'kubejs:item/mechanical_blade') // Optional: assumes texture exists
    .maxStackSize(64);

  // Register Pressed Mechanical Blade (Disco Frágil Prensado)
  event.create('pressed_mechanical_blade')
    .displayName('Disco Frágil Prensado')
    .texture('layer0', 'kubejs:item/pressed_mechanical_blade')
    .maxStackSize(64);

  // Register Intermediate Mechanical Blades (Stages 1-3)
  event.create('mechanical_blade_1')
    .displayName('Disco Maleable')
    .texture('layer0', 'kubejs:item/mechanical_blade_1')
    .maxStackSize(64);

  event.create('mechanical_blade_2')
    .displayName('Disco Maleable')
    .texture('layer0', 'kubejs:item/mechanical_blade_2')
    .maxStackSize(64);

  event.create('mechanical_blade_3')
    .displayName('Disco Maleable')
    .texture('layer0', 'kubejs:item/mechanical_blade_3')
    .maxStackSize(64);

  // Register Hot Mechanical Blade (Disco Caliente)
  event.create('hot_mechanical_blade')
    .displayName('Disco Caliente')
    .texture('layer0', 'kubejs:item/hot_mechanical_blade')
    .maxStackSize(64);

  // Register Hot Pressed Mechanical Blade (Disco Caliente Prensado)
  event.create('hot_pressed_mechanical_blade')
    .displayName('Disco Caliente Prensado')
    .texture('layer0', 'kubejs:item/hot_pressed_mechanical_blade')
    .maxStackSize(64);

  // Register Tempered Mechanical Blade (Disco Templado)
  event.create('tempered_mechanical_blade')
    .displayName('Disco Templado')
    .texture('layer0', 'kubejs:item/tempered_mechanical_blade') // Optional
    .maxStackSize(64);
});
