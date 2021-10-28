function limparTela(telaResultados, telaOperacoes, limpadorSelecionado, valorTelaResultados, ultimaOperacao) {
  if (limpadorSelecionado.id == "clearResults") {
    valorTelaResultados = '0'
    telaResultados.innerHTML = valorTelaResultados

  } else if (limpadorSelecionado.id == "clearAll") {
    valorTelaResultados = '0'
    telaResultados.innerHTML = valorTelaResultados
    telaOperacoes.innerHTML = ''
    ultimaOperacao = []
    calculo = ""
  } else {
    if (valorTelaResultados.length == 1) {
      valorTelaResultados = '0'
      telaResultados.innerHTML = valorTelaResultados
    } else {
      valorTelaResultados = valorTelaResultados.substring(0, valorTelaResultados.length - 1)
      telaResultados.innerHTML = valorTelaResultados
    }
  }
  telaOperacoes.style.fontSize = '20px'
  telaResultados.style.fontSize = '35px'
  aposUmaOperacao = false
  return {
    ultimaOperacao,
    aposUmaOperacao,
    valorTelaResultados,
    calculo
  };
}