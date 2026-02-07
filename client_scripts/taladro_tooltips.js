ItemEvents.tooltip(event => {
  event.add('kubejs:steel_coated_ingot', ['Avance: 3 Deploys', 'Secuencia: hierro + steel_sheet x3'])
  event.add('kubejs:incomplete_coated_ingot', ['Secuencia: ítem transicional'])
  event.add('kubejs:incomplete_drill_head', ['Secuencia: ítem transicional'])
  event.add('kubejs:fragile_drill_head', ['Secuencia: resultado'])
  event.add('kubejs:heated_drill_head', ['Proceso: blasting'])
  event.add('kubejs:tempered_drill_head', ['Proceso: splashing'])
  event.add('create:mechanical_drill', ['Final: deployer + andesite casing'])
})
