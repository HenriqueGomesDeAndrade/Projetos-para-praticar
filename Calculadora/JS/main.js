let ultimaOperacao = []
let calculo = ''
let aposUmaOperacao = false
let aposOIgual = false
let telaResultados = document.querySelector("#resultDisplay")
let valorTelaResultados = telaResultados.innerHTML
let telaOperacoes = document.querySelector("#operationsDisplay")
let valorTelaOperacoes = telaOperacoes.innerHTML
let numeros = document.querySelectorAll(".number")
let operacoes = document.querySelectorAll(".operation")
let limpadores = document.querySelectorAll(".clear")


//Quando clico nos numeros
numeros.forEach((numero) => {
  numero.addEventListener("click", (event) => {
    event.preventDefault()
    numeroSelecionado = event.target
    valorNumeroSelecionado = numeroSelecionado.innerHTML

    valorTelaResultados = exibirNaTelaResultados(telaOperacoes, telaResultados, valorTelaResultados, numeroSelecionado, valorNumeroSelecionado, aposUmaOperacao, aposOIgual)
    aposUmaOperacao = false
    if (aposOIgual) {
      calculo = ''
    }
    aposOIgual = false

    verifyFontSize(telaOperacoes, telaResultados, valorTelaResultados, valorTelaResultados)
  })
})

//Quando clico nas operacoes
operacoes.forEach((operacao) => {
  operacao.addEventListener("click", (event) => {
    event.preventDefault()
    operacaoSelecionada = event.target
    valorOperacaoSelecionada = operacaoSelecionada.innerHTML
    let retornosCalculo = realizaCalculo(telaOperacoes, valorTelaOperacoes, operacaoSelecionada, valorOperacaoSelecionada, ultimaOperacao, telaResultados, valorTelaResultados, calculo, aposUmaOperacao)
    calculo = retornosCalculo.calculo
    resultado = retornosCalculo.resultado
    aposOIgual = retornosCalculo.aposOIgual
    ultimaOperacao = verificarOperacao(valorOperacaoSelecionada)

    valorTelaResultados = exibirNaTelaOperacoes(telaOperacoes, telaResultados, calculo, resultado, valorTelaResultados)

    aposUmaOperacao = true
    verifyFontSize(telaOperacoes, telaResultados, valorTelaResultados, valorTelaResultados)
  })
})

//Quando clico para limpar
limpadores.forEach((limpador) => {
  limpador.addEventListener("click", (event) => {
    event.preventDefault()
    limpadorSelecionado = event.target
    valorLimpadorSelecionado = limpadorSelecionado.innerHTML

    //tudo tem que ser limpo
    let limpeza = limparTela(telaResultados, telaOperacoes, limpadorSelecionado, valorTelaResultados, ultimaOperacao)
    ultimaOperacao = limpeza.ultimaOperacao
    aposUmaOperacao = limpeza.aposUmaOperacao
    valorTelaResultados = limpeza.valorTelaResultados
    calculo = limpeza.calculo
    aposOIgual = false
    verifyFontSize(telaOperacoes, telaResultados, valorTelaResultados, valorTelaResultados)
  })
})

inverterValores = document.querySelector('#positiveNegative')

inverterValores.addEventListener('click', (event) => {
  event.preventDefault()
  valorTelaResultados = parseFloat(valorTelaResultados) * (-1)
  telaResultados.innerHTML = valorTelaResultados
  verifyFontSize(telaOperacoes, telaResultados, valorTelaResultados, valorTelaResultados)
})