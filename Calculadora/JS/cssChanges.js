function verifyFontSize(telaOperacoes, telaResultados, valorTelaResultados, valorTelaResultados) {
  if (valorTelaResultados.length > 13 && valorTelaResultados.length < 20) {
    telaResultados.style.fontSize = '25px'
  } else if (valorTelaResultados.length > 18) {
    telaResultados.style.fontSize = '20px'
  }
}
