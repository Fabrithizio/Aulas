const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", event => {
  console.log("O botão foi clicado!");
  console.log("O tipo de evento é:", event.type);
  console.log("O elemento que disparou o evento é:", event.target);
  console.log("posiçao do mause ao clicar ",event.composed)
});
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {console.log(numero);});
