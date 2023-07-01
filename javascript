const fechaActual = new Date();

const mesActual = fechaActual.getMonth();

const mesesVerano = [5, 6, 7];

if (mesesVerano.includes(mesActual)) {
  document.getElementById('resultado').textContent = "¡Sí, es verano!";
} else {
  document.getElementById('resultado').textContent = "No, no es verano.";
}
