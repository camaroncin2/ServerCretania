StartupEvents.registry('item', event => {
  event.create('steel_coated_rod').displayName('Varilla de Acero Revestido')
  event.create('coated_casing').displayName('Carcasa Revestida').maxStackSize(64).parentModel('kubejs:item/coated_casing')
  event.create('incomplete_press_casing_mk1').displayName('Carcasa de Prensa Incompleta').maxStackSize(64).parentModel('kubejs:item/incomplete_press_casing_mk1')
  event.create('incomplete_press_casing_mk2').displayName('Carcasa de Prensa Incompleta').maxStackSize(64).parentModel('kubejs:item/incomplete_press_casing_mk2')
  event.create('incomplete_press_casing_mk3').displayName('Carcasa de Prensa Incompleta').maxStackSize(64).parentModel('kubejs:item/incomplete_press_casing_mk3')
})
