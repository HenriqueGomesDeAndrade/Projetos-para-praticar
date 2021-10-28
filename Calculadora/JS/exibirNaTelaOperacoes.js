function exibirNaTelaOperacoes(telaOperacoes, telaResultados, calculo, resultado, valorTelaResultados) {
  telaOperacoes.innerHTML = calculo
  telaResultados.innerHTML = resultado
  valorTelaResultados = resultado.toString()
  return valorTelaResultados
}