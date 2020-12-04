
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  const { tempo , preco } = getFormInfo();
  addNewVenda(preco, tempo);
});

function getFormInfo() {

  const preco = document.querySelector("input#preco");
  const tempo = document.querySelector("input#tempo");

  return {
    tempo: tempo ? tempo.value : "",
    preco: preco ? preco.value : ""
  }
}
function addNewVenda(preco, tempo) {


  const pPagar = document.createElement("p");
  pPagar.textContent = `Valor a pagar R$:${(Math.ceil(tempo / 15) * preco).toFixed(2)}`;

  const div = document.createElement("div");

  div.appendChild(pPagar);

  const content = document.getElementById("content");
  content.appendChild(div);
}
