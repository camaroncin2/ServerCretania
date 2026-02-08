ServerEvents.recipes(event => {

    event.shaped(
        'kubejs:coated_casing' ,
        [
         'XXX' ,
         'X0X' , 
         'X0X'] , {
      X: 'kubejs:steel_coated_rod',
      '0': 'minecraft:air' // Definimos 0 como aire (vacío) para que funcione el patrón
    });
});