/*for (let i=0;i<=5;i++)
{
        console.log ("el contador es "+i)
}

console.log ("FIN ")


//var Aqua= 200;
let Emocion = 180;
let Alegria = 160;
let Frescura = 150;
let vend1 = "Juana";
let vend2 = "Pedro";
var vendedores = ["Juana", "Pedro"]

*/



window.onload = function ()
{

window.datos = [];



}
var ventas_juana = [];
function agregarelemento() 
{

    let vendedor = document.getElementById('vendor').value;

if (vendedor == "Juana")
{

    let c_aqua = document.getElementById('c_aqua').value;
    let c_emocion = document.getElementById('c_emocion').value;
    let c_alegria = document.getElementById('c_alegria').value;
    let c_frescura = document.getElementById('c_frescura').value;

    let sum_cant_aqua = sum_cant_aqua + c_aqua;
    let sum_cant_emocion = sum_cant_emocion + c_emocion;
    let sum_cant_alegria = sum_cant_alegria + c_alegria;
    let sum_cant_frescura = sum_cant_frescura + c_frescura;

    let sum_cant_total = sum_cant_aqua + sum_cant_emocion+sum_cant_alegria+sum_cant_frescura;

    let v_aqua = sum_cant_aqua *200;
    let v_emocion = sum_cant_emocion *180;
    let v_alegria = sum_cant_alegria *160;
    let v_frescura = sum_cant_frescura *150;
    let v_total = v_aqua+v_emocion+v_alegria+v_frescura;
    
    ventas.push(venta,c_aqua,v_aqua,c_emocion,v_emocion,c_alegria,v_alegria,c_frescura,v_frescura,v_total);

}
else
{

    let c_aqua = document.getElementById('c_aqua').value;
    let c_emocion = document.getElementById('c_emocion').value;
    let c_alegria = document.getElementById('c_alegria').value;
    let c_frescura = document.getElementById('c_frescura').value;

    let sum_cant_aqua = sum_cant_aqua + c_aqua;
    let sum_cant_emocion = sum_cant_emocion + c_emocion;
    let sum_cant_alegria = sum_cant_alegria + c_alegria;
    let sum_cant_frescura = sum_cant_frescura + c_frescura;

    let sum_cant_total = sum_cant_aqua + sum_cant_emocion+sum_cant_alegria+sum_cant_frescura;

    let v_aqua = sum_cant_aqua *200;
    let v_emocion = sum_cant_emocion *180;
    let v_alegria = sum_cant_alegria *160;
    let v_frescura = sum_cant_frescura *150;
    let v_total = v_aqua+v_emocion+v_alegria+v_frescura;
    
    ventas.push(venta,c_aqua,v_aqua,c_emocion,v_emocion,c_alegria,v_alegria,c_frescura,v_frescura,v_total);

}


}


function mostrarelementoventas()
{
let resultado = document.getElementById('resultadoventas');
resultado.innerHTML='';

//for (const vent of ventas )
//{
    let vendedor = document.createElement('p');
  
    
    vendedor.innerText ="Vendedor: "+ ventas[0]+ "\nCantidad Aqua: "+ ventas[1]+" Valor: "+ ventas[2]+ "\nCantidad Emocion: "+ ventas[3]+" Valor: "+ ventas[4] + "\nCantidad Alegria: "+ ventas[5]+" Valor: "+ ventas[6]+ "\nCantidad Frescura: "+ ventas[7]+" Valor: "+ ventas[8] + "\n Venta total: "+ventas[9];

   /* datoventas.innerText ="Cantidad Emocion: "+ ventas[3];
    datoventas.innerText ="Valor: "+ ventas[4];
    datoventas.innerText ="Cantidad Alegria: "+ ventas[5];
    datoventas.innerText ="Valor: "+ ventas[6];
    datoventas.innerText ="Cantidad Frescura: "+ ventas[7];
    datoventas.innerText ="Valor: "+ ventas[8];*/
    
    resultado.appendChild(vendedor);
  

  

//}


}

