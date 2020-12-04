
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  const { produto , preco } = getFormInfo();
  addNewVenda(preco, produto);
});

function getFormInfo() {

  const preco = document.querySelector("input#preco");
  const produto = document.querySelector("input#produto");

  return {
    produto: produto ? produto.value : "",
    preco: preco ? preco.value : ""
  }
}
function addNewVenda(preco, produto) {


  const pPagar = document.createElement("p");
  pPagar.textContent = `O 3º produto custa apenas R$:${(preco / 2).toFixed(2)}`;

  const pProduto = document.createElement("p");
  pProduto.textContent = `${produto} - Promoção: Leve 3 por R$:${(2 * preco + preco / 2).toFixed(2)}`;

  const div = document.createElement("div");

  div.appendChild(pProduto);
  div.appendChild(pPagar);

  const content = document.getElementById("content");
  content.appendChild(div);
}
