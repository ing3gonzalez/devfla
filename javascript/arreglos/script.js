

document.write("hola mundo")


document.write('<h1 style=""> Bienvenido a JS ARREGLLOS</h1>')


let arr = [];


for (let index = 0; index < 10; index++) {
  //  const element = array[index];
    
  arr.push(index);
    document.write(index)
    console.log(index)
}

let palabras = "";
palabras = prompt("ingrese los elementos a guardar separados por una coma ',' ");

//let contenedor = [];

var contenedor = palabras.split(',');
//contenedor.push(arreglo)

for (let sum = 1; sum < contenedor.length; sum++) {
    console.log(contenedor[sum])
    document.write("elemento "+sum+" "+contenedor[sum] + " \n ");
}



let ordenar =  [10,40,30,20,15,5];


console.log(ordenar.sort());
document.write(ordenar.sort());

