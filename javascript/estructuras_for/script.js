

document.write('<h1 style=""> Bienvenido a JS ARREGLOS FOR</h1>')



//
document.write('<h3 style=""> 1. Crea un programa que imprima en consola los números impares del 1 al 50.</h3>')
for (let x=1;x<=50;x++)
{
  document.write(" "+x+" ")
}


document.write('<h3 style=""> Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.</h3>')


var pokemons = 
[ 'bulbasaur',  'ivysaur',  'venusaur',  'charmander',  'charmeleon',  'charizard',  'squirtle',  'wartortle',  'blastoise',  'caterpie',  'metapod',
  'butterfree',  'weedle',  'kakuna',  'beedrill',  'pidgey',  'pidgeotto',  'pidgeot',  'rattata',  'raticate',  'spearow',  'fearow',  'ekans',  'arbok',
  'pikachu',  'raichu',  'sandshrew',  'sandslash',  'nidoran-f',  'nidorina',  'nidoqueen',  'nidoran-m',  'nidorino',  'nidoking',  'clefairy',  'clefable',
  'vulpix',  'ninetales',  'jigglypuff',  'wigglytuff',  'zubat',  'golbat',  'oddish',  'gloom',  'vileplume',  'paras',  'parasect',  'venonat',  'venomoth',
  'diglett',  'dugtrio',  'meowth',  'persian',  'psyduck',  'golduck',  'mankey',  'primeape',  'growlithe',  'arcanine',  'poliwag',  'poliwhirl',  'poliwrath',  'abra',
  'kadabra',  'alakazam',  'machop',  'machoke',  'machamp',  'bellsprout',  'weepinbell',  'victreebel',  'tentacool',  'tentacruel',  'geodude',  'graveler',  'golem',
  'ponyta',  'rapidash',  'slowpoke',  'slowbro',  'magnemite',  'magneton',  'farfetchd',  'doduo',  'dodrio',  'seel',  'dewgong',  'grimer',  'muk',  'shellder',  'cloyster',
  'gastly',  'haunter',  'gengar',  'onix',  'drowzee',  'hypno',  'krabby',  'kingler',  'voltorb' ]

  let numero = parseInt(prompt("Ingresa un número:"));

  document.write("Numero ingresado "+numero+" ")
  for (let y=1;y<=numero;y++)
{
  document.write("<br>"+numero+" X "+y+"= "+y*5+"\n");
  document.write("<br> Pokemon "+(y)+" = "+pokemons[(y-1)*5]+"\n");


}

document.write('<h3 style=""> 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.</h3>')

var arreglo = [4,'dos',8,'tres',5,9,1,'cero']
for (let z=0;z<arreglo.length;z++)
{

if (!isNaN(arreglo[z]))
{
  document.write("<br> isnan "+arreglo[z])
}
/*
if (typeof (arreglo[z])=== 'number')
{
  document.write("<br> type "+arreglo[z])
}
*/
}