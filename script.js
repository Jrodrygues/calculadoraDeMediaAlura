function notaFixada() {
  var notaPrimeiroSemestre = parseFloat(
    document.getElementById("primeiroSemestre").value
  );

  var notaSegundoSemestre = parseFloat(
    document.getElementById("segundoSemestre").value
  );

  var notaTerceiroSemestre = parseFloat(
    document.getElementById("terceiroSemestre").value
  );

  var notaQuartoSemestre = parseFloat(
    document.getElementById("quartoSemestre").value
  );

  var notaFixada = (
    (notaPrimeiroSemestre +
      notaSegundoSemestre +
      notaTerceiroSemestre +
      notaQuartoSemestre) /
    4
  ).toFixed(2);

  var nomeDoAluno = document.getElementById("nome").value;
  var resposta = nomeDoAluno + " Sua média final é de: " + notaFixada;

  var resultado = "";
  if (notaFixada >= 6) {
    resultado = " Parabéns, aprovado! ";
  } else {
    resultado = " Reprovado! ";
  }
  document.getElementById("textoResposta").innerHTML = resposta;
  document.getElementById("valorResultado").innerHTML = resultado;

  document.getElementById("nome").value = "";
  document.getElementById("primeiroSemestre").value = "";
  document.getElementById("segundoSemestre").value = "";
  document.getElementById("terceiroSemestre").value = "";
  document.getElementById("quartoSemestre").value = "";
}