

const input = document.querySelector('#consigna')
const buttonDeposito = document.querySelector('#boton_deposita')
const dineroencuenta = document.querySelector('#boton_consulta')
const cuentaPersonal =
{
    saldo:0,
    nombre: "Jefry",
    cuenta:"1010",
    password:"1010"  
}

buttonDeposito.addEventListener('click',function(e)
{
    console.log(e)


    const deposito = input.value
    const numerdeposito = parseInt(deposito)
    console.log (typeof deposito)

    const saldo =  cuentaPersonal.saldo 

    const resultado =  saldo  + deposito

    saldo.innerText=resultado

}
)
var cuentas = [
  { nombre: 'Mali', saldo: 200 },
  { nombre: 'Gera', saldo: 290 },
  { nombre: 'Maui', saldo: 67 }
];

