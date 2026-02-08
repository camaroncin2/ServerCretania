ServerEvents.recipes(event => {
  event.remove({ id: 'kubejs:steel_coated_rod_rolling' })
  event.custom({
    type: 'createaddition:rolling',
    input: { item: 'kubejs:steel_coated_ingot' },
    result: { item: 'kubejs:steel_coated_rod', count: 2 }
  }).id('kubejs:steel_coated_rod_rolling')
})
