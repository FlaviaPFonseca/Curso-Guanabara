onload =() => {
  document.querySelector('#btn-0').onclick = () => digito(0)
  document.querySelector('#btn-1').onclick = () => digito(1)
  document.querySelector('#btn-2').onclick = () => digito(2)
  document.querySelector('#btn-3').onclick = () => digito(3)
  document.querySelector('#btn-4').onclick = () => digito(4)
  document.querySelector('#btn-5').onclick = () => digito(5)
  document.querySelector('#btn-6').onclick = () => digito(6)
  document.querySelector('#btn-7').onclick = () => digito(7)
  document.querySelector('#btn-8').onclick = () => digito(8)
  document.querySelector('#btn-9').onclick = () => digito(9)
  document.querySelector('#btn-ac').onclick = limpa
  document.querySelector('#btn-comma').onclick = virgula
  document.querySelector('#btn-result').onclick = calcula
  document.querySelector('#btn-divide').onclick = () => operador('/')
  document.querySelector('#btn-times').onclick = () => operador('*')
  document.querySelector('#btn-minus').onclick = () => operador('-')
  document.querySelector('#btn-plus').onclick = () => operador('+')
}

let sValor = '0'
let ehNovoNumero = true
let valorAnterior = 0
let operaçãoPendente = null

const atualizaVisor = () => {
  let [parteInteira, parteDecimal] = sValor.split(',')
  if (parteInteira.length > 15) {
    document.querySelector('#display').innerText = 'Error'
    return
  }
  let valor = ''

  c = 0

  for (let i = parteInteira.length - 1; i >= 0; i--) {
    if (++c > 3) {
      valor = '.' + valor
      c = 1
    }

    valor = parteInteira[i] + valor
  }

  valor = valor + (parteDecimal ? ',' + parteDecimal.substring(0, 15) : '')

  document.querySelector('#display').innerText = valor
}

const digito = n => {
  if (ehNovoNumero) {
    sValor = '' + n // '' + 4
    ehNovoNumero = false //
    // } else if (sValor.indexOf(',') == -1) sValor += ',' // 4 <- 8  ========>>>>  48
  } else sValor += n //'4' + '8' = '48'
  atualizaVisor()
  // sValor.length
}

const virgula = () => {
  if (ehNovoNumero) {
    sValor = '0,'
    ehNovoNumero = false
  } else if (sValor.indexOf(',') == -1) sValor += ','
  atualizaVisor()
}

const limpa = () => {
  ehNovoNumero = true
  valorAnterior = 0
  sValor = '0'
  operaçãoPendente = null
  atualizaVisor()
}

const valorAtual = () => parseFloat(sValor.replace(',', '.'))

const operador = op => {
  calcula()
  valorAnterior = valorAtual()
  operaçãoPendente = op
  ehNovoNumero = true
}

const calcula = () => {
  if (operaçãoPendente != null) {
    let resultado
    switch (operaçãoPendente) {
      case '+':
        resultado = valorAnterior + valorAtual()
        break
      case '-':
        resultado = valorAnterior - valorAtual()
        break
      case '*':
        resultado = valorAnterior * valorAtual()
        break
      case '/':
        resultado = valorAnterior / valorAtual()
        break
    }
    sValor = resultado.toString().replace('.', ',')
    ehNovoNumero = true
    operaçãoPendente = null
    valorAnterior = 0
    atualizaVisor()
  }
}
