const entrada1 = prompt("Informe o primeiro número:") ;
const entrada2 = prompt("Informe o segundo número:") ;

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x+y;
const subtracao = x-y;
const divisao = x/y;
const multiplicacao = x*y;

alert(
    "Calculadora: " +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nDivisão: " + divisao +
    "\nMultiplicação: " + multiplicacao
  )