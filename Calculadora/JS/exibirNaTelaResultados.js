function exibirNaTelaResultados(telaOperacoes, telaResultados, valorTelaResultados, numeroSelecionado, valorNumeroSelecionado, aposUmaOperacao, aposOIgual) {
  if (aposOIgual) {
    valorTelaResultados = ''
    valorTelaOperacoes = ''
    telaOperacoes.innerHTML = ''
    ultimaOperacao = []
  } else if (valorTelaResultados == '0' && numeroSelecionado.id != 'comma' || aposUmaOperacao) {
    valorTelaResultados = ''

  }

  valorTelaResultados += valorNumeroSelecionado
  telaResultados.innerHTML = valorTelaResultados

  return valorTelaResultados
}