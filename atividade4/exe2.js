
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  const { veiculo, preco } = getFormInfo();
  addNewPromocao(veiculo, preco);
});

function getFormInfo() {

  const veiculo = document.querySelector("input#veiculo");
  const preco = document.querySelector("input#preco");

  return {
    veiculo: veiculo ? veiculo.value : "",
    preco: preco ? preco.value : ""
  }
}
function addNewPromocao(veiculo, preco) {

  const pVeiculo = document.createElement("p");
  pVeiculo.textContent = `Promoção: ${veiculo}`;
  
  const pEntrada = document.createElement("p");
  pEntrada.textContent = `Entrada de R$:${(preco / 2).toFixed(2)}`;

  const pParcelas = document.createElement("p");
  pParcelas.textContent = `+ 12x de R$:${(preco / 24).toFixed(2)}`;

  const div = document.createElement("div");

  div.appendChild(pVeiculo);
  div.appendChild(pEntrada);
  div.appendChild(pParcelas);

  const content = document.getElementById("content");
  content.appendChild(div);
}
