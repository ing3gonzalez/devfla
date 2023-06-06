

document.write("hola mundo")


document.write('<h1 style=""> Bienvenido a JS </h1>')



let bello = "";
bello = prompt("¿Eres bellisimo/a?");
if (bello == "si") {
    document.write("Ciertamente \n ");
}else{
    document.write("No te creo \n ");
}



let divi = 0;
divi = prompt("Ingrese un numero para determinar si es divisible entre 2");
if (divi % 2 ===0) {
    document.write(divi+" es divisible entre 2 \n" );
}else{
    document.write(divi+" No es divisible entre 2 \n");
}


let par = 0;
par = prompt("Ingrese un numero para determinar si es par");
if (par % 2 ===0) {
    alert(par+"es par \n ");
}else{
    alert(par+" No es par \n");
}


let cliente = 0;
cliente = prompt("Ingrese el numero de cliente");
if (cliente  ==1000) {
    document.write("cliente No"+cliente+" ganaste un premio \n ");
}else{
    document.write(" cliente No"+cliente+" lo sentimos, sigue participando \n");
}


let a = 0;
let b = 0;

a = prompt("Ingrese un numero entero A");
b = prompt("Ingrese un numero entero B");

if (a  > b) {
    document.write("\nNumero "+a +"mayor que "+b);
}else{
     document.write("\n Numero "+b +"mayor que "+a);
}


let j = 0;
let k = 0;
let m = 0;
//j = prompt("Ingrese un numero entero J");
//k = prompt("Ingrese un numero entero K");
//m = prompt("Ingrese un numero entero M");

if (j > k){
    if (j > m){
       document.write("Numero "+j+" es Mayor ");
       }
       else{
          document.write("Numero "+m+" es mayor");
          }
 }
 else{
    if(j < k){
       if (k > m){
          document.write("Numero "+k+" es mayor")
          }
          else{
             document.write("Numero "+m+" es mayor");
             }
       }
    }



let semana = 0;
let dia = 0;
semana = prompt("Ingrese un numero de la semana");

dia = parseInt(semana)

if (dia < 8) {
    if (dia >= 1) {

        switch (dia) {
            case 1:
                document.write("Lunes")
                console.log("Lunes")
                break;
            case 2:
                document.write("Martes")
                console.log("Lunes")
                break;
            case 3:
                document.write("Miercoles")
                console.log("Lunes")
                break;
            case 4:
                document.write("Jueves")
                console.log("Lunes")
                break;
            case 5:
                document.write("Viernes")
                console.log("Lunes")
                break;
            case 6:
                document.write("Sabado")
                console.log("Lunes")
                break;
            case 7:
                document.write("Domingo")

                console.log("Lunes")
                break;
        }
    }

}
else {
    document.write("Numero de semana no valido");
}




let nota = 0;

nota = prompt("Ingrese el valor de la nota");

if (nota>=1) 
{
 if (nota<11)
 {

    if (nota<6)
    {
        document.write("Reprobado")
    }
    else if (nota>=6)
    {
        if (nota<=8)
        {
            document.write("Bien") 
        }
   else
        {
            document.write("Excelente") 
        }
    }
    
    
      }


 }


else 
{
    document.write("Nota ingresada no valida");
}



let helado = 50;
let oreo = 10;
let kitkat = 15;
let brownie = 20;

let usuario = 0;
let eleccion = 0;
let valor = 0;
usuario = prompt("Ingrese el numero del topping deseado \n 1. Helado con Oreo \n 2. Helado con Kitkat \n 3. Helado con Brownie \n 4. Helado con todo \n 5. Ninguno");


eleccion = parseInt(usuario)
switch (eleccion) {
    case 1:
        valor = helado + oreo    
    document.write("El valor del helado con oreo es: " + valor)
        break;

    case 2:
        valor =  + helado + kitkat
    document.write("El valor del helado con kitkat es: " + valor)
    break;
    case 3:
        valor = + helado + brownie 
    document.write("El valor del helado con brownie es: " + valor)
    break;

    case 4:
        valor = + helado + oreo + kitkat + brownie
        document.write("El valor del helado con brownie es: " + valor)
        break;

        default:
            document.write("El valor del helado sin toppings es: " + helado)
            break;

}




let course = 4999;
let carrera = 3999;
let master = 2999;


let programat = 0;
let becat = 0;

let programa = 0;
let beca = 0;

let valor = 0;

programat = prompt("Ingrese el programa a cursar \n 1. Course \n 2. Carrera \n 3. Master ");
becat = prompt("Ingrese la beca a aplicar \n 1. Facebook \n 2. Google \n 3. Jesua \n 4. Ninguna ");

programa = parseInt(programat)
beca = parseInt(becat)

switch (programa) {
    case 1:


        switch (beca) {
            case 1:
                valor = (course * 0.8) * 2
                document.write("El valor del curso elegido es: " + valor)
                break;
            case 2:
                valor = (course * 0.75) * 2
                document.write("El valor del curso elegido es: " + valor)
                break;
            case 3:
                valor = (course * 0.5) * 2
                document.write("El valor del curso elegido es: " + valor)
                break;

            default:
                valor = (course) * 2
                document.write("El valor del curso elegido es: " + valor)
                break;
        }

        break;
    case 2:


        switch (beca) {
            case 1:
                valor = (carrera * 0.8) * 6
                document.write("El valor de la carrera elegida es: " + valor)
                break;
            case 2:
                valor = (carrera * 0.75) * 6
                document.write("El valor de la carrera elegida es: " + valor)
                break;
            case 3:
                valor = (carrera * 0.5) * 6
                document.write("El valor de la carrera elegida es: " + valor)
                break;

            default:
                valor = (carrera) * 6
                document.write("El valor de la carrera elegida es: " + valor)
                break;
        }

        break;
    case 3:


        switch (beca) {
            case 1:
                valor = (master * 0.8) * 12
                document.write("El valor del master elegido es: " + valor)
                break;
            case 2:
                valor = (master * 0.75) * 12
                document.write("El valor del master elegido es: " + valor)
                break;
            case 3:
                valor = (master * 0.5) * 12
                document.write("El valor del master elegido es: " + valor)

                break;
            default:
                valor = (master) * 12
                document.write("El valor del master elegido es: " + valor)
                break;
        }
        break;
}



let coche = 0.20;
let moto = 0.10;
let bus = 0.5;
let pagar = 0;

let km = 0;
let kmt = 0;
let vehiculot = 0;
let vehiculo = 0;

vehiculot = prompt("Seleccione el tipo de vehiculo \n 1. Coche \n 2. Moto \n 3. Autobus ");

kmt = prompt("Ingrese la cantidad de kilometros recorridos");

vehiculo = parseInt(vehiculot)
km = parseInt(kmt)

switch (vehiculo) {
    case 1:

        if (km < 100) {
            pagar = (coche * km) + 5
        }
        else {
            pagar = (coche * km) + 10
        }

        document.write("El valor a pagar por " + km + " kms recorridos en coche es: " + pagar)
        break;

    case 2:
        if (km < 100) {
            pagar = (moto * km) + 5
        }
        else {
            pagar = (moto * km) + 10
        }

        document.write("El valor a pagar por " + km + " kms recorridos en coche es: " + pagar)
        break;
    case 3:
        if (km < 100) {
            pagar = (bus * km) + 5
        }
        else {
            pagar = (bus * km) + 10
        }

        document.write("El valor a pagar por " + km + " kms recorridos en coche es: " + pagar)

        break;



}
