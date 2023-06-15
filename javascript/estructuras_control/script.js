

document.write('<h1 style=""> Bienvenido a JS ARREGLOS</h1>')


/*
let numuser = 0;
let num = 0;
let mult = 1;
numuser = prompt("Ingrese un numero");
num = parseInt(numuser)

document.write("Los numeros múltiplos de 5 asociados al número "+num+" son: ")

while (mult < num)
{


  document.write("<br>"+num+" X "+mult+"= "+mult*5+"\n");

  mult++;
}



let numuser1 = 0;
let num1 = 0;

let numuser2 = 0;
let num2 = 0;

let a=1;
let b=50;

numuser1 = prompt("Ingrese un numero entre 1 y 50");
num1 = parseInt(numuser1)

numuser2 = prompt("Ingrese un numero entre 1 y 50");
num2 = parseInt(numuser2)

while (a <= b)
{

if (num1==a)
{
  document.write("<br>Loteria num "+a+"<br>");
}

else if (num2==a)
{
  document.write("<br>Loteria num "+a+"<br>");
}
else{
  document.write("\n"+a+"\n");
}
  a++;
}



var numeros = [];
var capturandoNumeros = true;

while (capturandoNumeros) {
  var numero = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));

  if (!isNaN(numero)) {
    if (numero !== 0) {
      numeros.push(numero);
    } else {
      capturandoNumeros = false;
    }
  }
}

document.write("Números capturados:");
document.write(numeros);



var resultado = "";


var entrada = "";


while (entrada !== undefined && entrada !== null) {
  entrada = prompt("Ingresa una letra o palabra (deja vacío para terminar):");
  

  if (entrada !== "") {
    resultado += entrada;
  }
}


document.write("Resultado:");
document.write(resultado);





var semana = "";

while (semana.toLowerCase() !== "domingo") {
  semana = prompt("Digita un dia de la semana en letras:");
 

  
switch (semana.toLowerCase())
{
case 'lunes':
{
  alert("Lunes");
  break;
}
case 'martes':
{
  alert("martes");
  break;
}
case 'miercoles':
{
  alert("miercoles");
  break;
}
case 'jueves':
{
  alert("jueves");
  break;
}
case 'viernes':
{
  alert("viernes");
  break;
}
case 'sabado':
{
  alert("sabado");
  break;
}

}

}

alert("Ve a descansar")

*/