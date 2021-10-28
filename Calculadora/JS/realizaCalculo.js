function verificarOperacao(valorOperacaoSelecionada) {
  ultimaOperacao.unshift(valorOperacaoSelecionada)
  return ultimaOperacao
}

function realizaCalculo(telaOperacoes, valorTelaOperacoes, operacaoSelecionada, valorOperacaoSelecionada, ultimaOperacao, telaResultados, valorTelaResultados, calculo, aposUmaOperacao) {
  let resultado = ''

  let imprimir = {
    calculo,
    resultado,
    aposOIgual,
    aposUmaOperacao,
    valorTelaResultados,
    valorOperacaoSelecionada,
    ultimaOperacao
  }
  console.log('antes', imprimir)


  if (operacaoSelecionada.classList.contains("aloneOperation")) {
    retornosCalculo = calculoSozinho(calculo, valorTelaResultados, valorOperacaoSelecionada, resultado, ultimaOperacao)
  } else {
    retornosCalculo = calculoNormal(calculo, valorTelaResultados, valorOperacaoSelecionada, resultado, ultimaOperacao, aposUmaOperacao)
  }

  console.log("retornos calculo", retornosCalculo);
  return retornosCalculo
}


function calculoNormal(calculo, valorTelaResultados, valorOperacaoSelecionada, resultado, ultimaOperacao, aposUmaOperacao) {
  if (aposUmaOperacao && valorOperacaoSelecionada !== '=') {
    if (ultimaOperacao[0] == '=') {
      console.log("clicou em outra operacao e veio do igual")
      resultado = valorTelaResultados
      calculo = resultado + valorOperacaoSelecionada
      aposOIgual = false

    } else {
      if (calculo.includes('²√')) {
        calculo = calculo.substring(calculo.indexOf("√") + 1,)
        resultado = parseFloat(calculo)
        calculo = resultado + valorOperacaoSelecionada
        aposOIgual = false

      } else {
        console.log("apos operacao e dif igual")
        resultado = parseFloat(calculo)
        calculo = resultado + valorOperacaoSelecionada
        aposOIgual = false
      }
    }
  } else {
    if (ultimaOperacao.length == 0) {
      console.log("ultima operacao vazia")
      resultado = valorTelaResultados
      calculo = resultado + valorOperacaoSelecionada
      aposOIgual = false
    } else if (valorOperacaoSelecionada == '=' && ultimaOperacao[0] == '=') {
      console.log("clicou no igual e veio do igual");

      if (calculo.length <= 2 || (ultimaOperacao.length == 1)) {
        console.log("mas era menor q 2")
        resultado = valorTelaResultados
        calculo = resultado + valorOperacaoSelecionada

      } else {
        let operacaoTemporaria = ultimaOperacao.slice(1, ultimaOperacao.length)
        let valorFixo = calculo.substring(calculo.indexOf(operacaoTemporaria[0]) + 1, calculo.indexOf(valorOperacaoSelecionada))
        console.log("valor fixo", valorFixo)
        resultado = calcularResultado(resultado, calculo, valorFixo, ultimaOperacao, operacaoTemporaria)
        calculo = resultado + operacaoTemporaria[0] + valorFixo + valorOperacaoSelecionada
        resultado = calcularResultado(resultado, calculo, valorFixo, ultimaOperacao, operacaoTemporaria)
        aposOIgual = true
        ultimaOperacao.shift()
      }

    } else if (valorOperacaoSelecionada == '=') {
      console.log("clicou no igual")
      resultado = calcularResultado(resultado, calculo, valorTelaResultados, ultimaOperacao, ultimaOperacao)
      calculo = calculo + valorTelaResultados + valorOperacaoSelecionada
      aposOIgual = true

    } else {
      console.log("situação normal")
      resultado = calcularResultado(resultado, calculo, valorTelaResultados, valorOperacaoSelecionada, ultimaOperacao)
      calculo = resultado + valorOperacaoSelecionada
      aposOIgual = false
    }
  }
  return {
    calculo,
    resultado,
    aposOIgual,
    aposUmaOperacao,
    valorTelaResultados,
    valorOperacaoSelecionada,
    ultimaOperacao
  }
}

function calcularResultado(resultado, calculo, valorTelaResultados, valorOperacaoSelecionada, ultimaOperacao) {
  if (ultimaOperacao[0] == "+") {
    resultado = parseFloat(calculo) + parseFloat(valorTelaResultados)
  }
  if (ultimaOperacao[0] == "-") {
    resultado = parseFloat(calculo) - parseFloat(valorTelaResultados)
  }
  if (ultimaOperacao[0] == "x") {
    resultado = parseFloat(calculo) * parseFloat(valorTelaResultados)
  }
  if (ultimaOperacao[0] == "÷") {
    resultado = parseFloat(calculo) / parseFloat(valorTelaResultados)
  }
  if (ultimaOperacao[0] == "%") {
    resultado = (parseFloat(calculo) * parseFloat(valorTelaResultados)) / 100
  }
  if (ultimaOperacao[0] == "^") {
    resultado = parseFloat(calculo) ** parseFloat(valorTelaResultados)
  }
  return resultado
}

function calculoSozinho(calculo, valorTelaResultados, valorOperacaoSelecionada, resultado, ultimaOperacao) {
  if (valorOperacaoSelecionada == "1/X") {
    let ajusteOperacao = '1/'
    calculo = ajusteOperacao + valorTelaResultados
    resultado = 1 / parseFloat(valorTelaResultados)
  } else {
    calculo = valorOperacaoSelecionada + valorTelaResultados
    resultado = Math.sqrt(parseFloat(valorTelaResultados))
  }

  aposOIgual = false
  return {
    calculo,
    resultado,
    aposOIgual,
    aposUmaOperacao,
    valorTelaResultados,
    valorOperacaoSelecionada,
    ultimaOperacao
  }
}