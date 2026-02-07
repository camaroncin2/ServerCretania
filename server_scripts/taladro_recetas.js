ServerEvents.recipes(event => {

  event.remove({ output: 'create:mechanical_drill' })

  event.remove({ id: 'kubejs:steel_coated_ingot_sequence' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'minecraft:iron_ingot' },
    loops: 1,
    results: [{ item: 'kubejs:steel_coated_ingot', count: 1 }],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:incomplete_coated_ingot' }, { item: 'create_ironworks:steel_sheet' }],
        results: [{ item: 'kubejs:incomplete_coated_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:incomplete_coated_ingot' }, { item: 'create_ironworks:steel_sheet' }],
        results: [{ item: 'kubejs:incomplete_coated_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:incomplete_coated_ingot' }, { item: 'create_ironworks:steel_sheet' }],
        results: [{ item: 'kubejs:incomplete_coated_ingot' }]
      }
    ],
    transitionalItem: { item: 'kubejs:incomplete_coated_ingot' }
  }).id('kubejs:steel_coated_ingot_sequence')

  // ===============================
  // SECUENCIA DE ENSAMBLAJE
  // ===============================



  event.remove({ id: 'kubejs:drill_head_sequence' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:steel_coated_ingot' },
    loops: 1,
    results: [{ item: 'kubejs:fragile_drill_head', count: 1 }],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:steel_coated_ingot' }, { item: 'create:andesite_alloy' }],
        results: [{ item: 'kubejs:steel_coated_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:steel_coated_ingot' }, { item: 'create:andesite_alloy' }],
        results: [{ item: 'kubejs:steel_coated_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:steel_coated_ingot' }, { item: 'create:andesite_alloy' }],
        results: [{ item: 'kubejs:steel_coated_ingot' }]
      }
    ],
    transitionalItem: { item: 'kubejs:steel_coated_ingot' }
  }).id('kubejs:drill_head_sequence')






  // ===============================
  // PROCESO TÉRMICO
  // ===============================
event.blasting(
  'kubejs:heated_drill_head',
  'kubejs:fragile_drill_head'
)

event.recipes.create.splashing(
  ['kubejs:tempered_drill_head'],
  'kubejs:heated_drill_head'
)


  // ===============================
  // ENSAMBLAJE FINAL
  // ===============================
  event.recipes.create.deploying(
    'create:mechanical_drill',
    ['kubejs:tempered_drill_head', 'create:andesite_casing']
  )
})
