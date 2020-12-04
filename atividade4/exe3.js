
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  const { gramas , preco } = getFormInfo();
  addNewVenda(preco, gramas);
});

function getFormInfo() {

  const preco = document.querySelector("input#preco");
  const gramas = document.querySelector("input#gramas");

  return {
    gramas: gramas ? gramas.value : "",
    preco: preco ? preco.value : ""
  }
}
function addNewVenda(preco, gramas) {


  const pPagar = document.createElement("p");
  pPagar.textContent = `Valor a pagar R$:${(preco * (gramas / 1000)).toFixed(2)}`;

  const div = document.createElement("div");

  div.appendChild(pPagar);

  const content = document.getElementById("content");
  content.appendChild(div);
}
