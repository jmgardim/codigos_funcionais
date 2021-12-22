//let total = document.getElementById("valorDividas")
// let parcelas = document.getElementById("QParcelas")
// let valorParcelas = document.getElementById("valorParcelas")

// total.addEventListener("input", calcular);
// parcelas.addEventListener("input", calcular);

// function calcular() {
//   valorParcelas.value =
//   Number(total.value || 0) / Number(parcelas.value || 1);}


function colocavalor(valueid,idDivide, resultid){
  let valor = document.getElementById(valueid).value;
  let divisor = document.getElementById(idDivide).value;
  let resultinput = document.getElementById(resultid);

  var v = valor.replace(/\D/g, "");
  v = (v / 100).toFixed(2) + ""; 
  let resultado = (v*1)/(divisor*1);

  resultinput.value = resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  let berinbau = 0;
  berinbau = (v*1).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  document.getElementById(valueid).value = berinbau;

  // console.log(formatar(v))
}
function formatar(valor) {
  var v = valor.replace(/\D/g, ""); // remove todos os NAO numeros
  //v = (v / 100).toFixed(2) + ""; // divide o valor para deixar com decimal
  return v;
}

