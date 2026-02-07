// KubeJS Startup Script
// Place this file in kubejs/startup_scripts/

StartupEvents.registry('item', event => {
  // 1. Residuos de Plomo Impuro
  event.create('impure_lead_residue')
    .displayName('Residuos de Plomo Impuro')
    .texture('layer0', 'kubejs:item/impure_lead_residue');

  // 2. Plomo en Bruto
  event.create('raw_lead')
    .displayName('Plomo en Bruto')
    .texture('layer0', 'kubejs:item/raw_lead');

  // 3. Cobre Maleable
  event.create('malleable_copper')
    .displayName('Cobre Maleable')
    .texture('layer0', 'kubejs:item/malleable_copper');

  // 4. Zinc Adherible (Corregido de "Zing")
  event.create('adherable_zinc')
    .displayName('Zinc Adherible')
    .texture('layer0', 'kubejs:item/adherable_zinc');

  // 5. Latón Maleable
  event.create('malleable_brass')
    .displayName('Latón Maleable')
    .texture('layer0', 'kubejs:item/malleable_brass');

  // 6. Latón Maleable (Etapas de Forjado)
  // Etapa 0: Latón Maleable (Base) - ya definido arriba como 'malleable_brass'

  // Etapa 1: Latón Maleable (Forjado 1 vez)
  event.create('malleable_brass_1')
    .displayName('Latón Maleable')
    .texture('layer0', 'kubejs:item/malleable_brass_1')
    .maxStackSize(1);

  // Etapa 2: Latón Maleable (Forjado 2 veces)
  event.create('malleable_brass_2')
    .displayName('Latón Maleable')
    .texture('layer0', 'kubejs:item/malleable_brass_2')
    .maxStackSize(1);
    
  // El último paso da Brass Ingot, así que no necesitamos malleable_brass_3
});
