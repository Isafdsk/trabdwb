alert("PÁGINA SOBRE ZHONGLI")
console.log
var btnTerceiro = document.querySelector(".btnTerceiro");
console.log(btnTerceiro);

btnTerceiro.addEventListener("click", () => {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  var corAleatoria = "rgb(" + red + "," + green + "," + blue + ")";

  console.log(corAleatoria);

  document.body.style.backgroundColor = corAleatoria;
});