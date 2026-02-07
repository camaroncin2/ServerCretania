// KubeJS Startup Script
// Place this file in kubejs/startup_scripts/

StartupEvents.registry('item', event => {
  const minerals = [
    { id: 'iron', name: 'Hierro', color: 0xA1A1A1 },
    { id: 'gold', name: 'Oro', color: 0xFDF55F },
    { id: 'copper', name: 'Cobre', color: 0xE77C56 }
  ];

  minerals.forEach(mineral => {
    // 1. Residuos Impuros
    event.create(`impure_${mineral.id}_residue`)
      .displayName(`Residuos de ${mineral.name} Impuro`)
      .texture(`layer0`, `kubejs:item/impure_${mineral.id}_residue`);

    // 2. Mineral en Bruto (Custom Raw Ore)
    event.create(`crude_${mineral.id}`)
      .displayName(`${mineral.name} en Bruto`)
      .texture(`layer0`, `kubejs:item/crude_${mineral.id}`);

    // 3. Mineral Fundido
    event.create(`molten_${mineral.id}`)
      .displayName(`${mineral.name} Fundido`)
      .texture(`layer0`, `kubejs:item/molten_${mineral.id}`);

    // 4. Lámina Frágil (y su incompleta para la secuencia)
    event.create(`fragile_${mineral.id}_sheet`)
      .displayName(`Lámina de ${mineral.name} Frágil`)
      .texture(`layer0`, `kubejs:item/fragile_${mineral.id}_sheet`);
      
    event.create(`incomplete_fragile_${mineral.id}_sheet`)
      .displayName(`Lámina de ${mineral.name} Frágil (Incompleta)`)
      .texture(`layer0`, `kubejs:item/fragile_${mineral.id}_sheet`)
      .maxStackSize(1); // Transitional items usually stack 1

    // 5. Lámina Calentada
    event.create(`heated_${mineral.id}_sheet`)
      .displayName(`Lámina de ${mineral.name} Calentada`)
      .texture(`layer0`, `kubejs:item/heated_${mineral.id}_sheet`);
  });
});
