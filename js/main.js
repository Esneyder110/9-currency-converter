// Grab elements
const selectElements = (selector) => {
  const element = document.querySelectorAll(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

const inputs = selectElements('.form__input');

inputs.forEach((element) => {
  element.addEventListener('input', hacerConversion);
});

console.log(inputs[0]);
let precioDolarPeso = 4000;
let precioDolarBolivar = 8.19;

function hacerConversion(event) {
  let newPesos = 0;
  let newBolivares = 0;
  let newDolares = 0;

  if (event.srcElement.id === 'dolares') {
    //  Dolares
    newDolares = event.srcElement.value;
    newPesos = (newDolares * precioDolarPeso).toFixed(2);
    newBolivares = (
      newDolares * precioDolarBolivar
    ).toFixed(2);
  } else if (event.srcElement.id === 'pesos') {
    // Pesos
    newPesos = event.srcElement.value;
    newDolares = (newPesos / precioDolarPeso).toFixed(2);
    newBolivares = (
      newDolares * precioDolarBolivar
    ).toFixed(2);
  } else {
    // Bolivares
    newBolivares = event.srcElement.value;
    newDolares = (
      newBolivares / precioDolarBolivar
    ).toFixed(2);
    newPesos = (newDolares * precioDolarPeso).toFixed(2);
  }
  // Actualizar valores
  actualizarValores([newDolares, newPesos, newBolivares]);
}

function actualizarValores(array) {
  for (let i = 0; i < array.length; i++) {
    inputs[i].value = array[i];
  }
}
