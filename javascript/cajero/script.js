const accountSelect = document.getElementById("accountSelect");
const consultarButton = document.getElementById("consultar");
const retirarButton = document.getElementById("retirar");
const consignarButton = document.getElementById("consignar");
const outputDiv = document.getElementById("output");

const accounts = {
  Mali: 1000,
  Gera: 1500,
  Maui: 2000,
};

consultarButton.addEventListener("click", () => {
  const selectedAccount = accountSelect.value;
  const balance = accounts[selectedAccount];
  outputDiv.innerText = `Saldo de ${selectedAccount}: $${balance}`;
});

consignarButton.addEventListener("click", () => {
  const selectedAccount = accountSelect.value;
  const balance = accounts[selectedAccount];
  const valorconsignado = parseFloat(prompt("Ingrese la cantidad a consignar:"));

  if (isNaN(valorconsignado) || valorconsignado <= 0) {
    alert("Ingrese una cantidad válida para consignar.");
    return;
  }

  accounts[selectedAccount] += valorconsignado;
  outputDiv.innerText = `Consignaste $${valorconsignado}. Saldo nuevo: $${accounts[selectedAccount]}`;
});


retirarButton.addEventListener("click", () => {
  const selectedAccount = accountSelect.value;
  const balance = accounts[selectedAccount];
  const withdrawalAmount = parseFloat(prompt("Ingrese la cantidad a retirar:"));

  if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
    alert("Ingrese una cantidad válida para retirar.");
    return;
  }

  if (withdrawalAmount > balance) {
    alert("Fondos insuficientes.");
    return;
  }

  accounts[selectedAccount] -= withdrawalAmount;
  outputDiv.innerText = `Retiraste $${withdrawalAmount}. Saldo restante: $${accounts[selectedAccount]}`;
});