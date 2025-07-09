const frutas = ['Maça','Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(0,2, 'Kiwi', 'Pêssego');

const menuPrincipal = ['Strogonoff','Frango', 'Bife'];
const menuDeSobremesa = ['Pudim', 'Torta', 'Doce'];

const menuCompleto = menuDeSobremesa.concat(menuPrincipal);

console.log(menuCompleto);
console.log(frutas);