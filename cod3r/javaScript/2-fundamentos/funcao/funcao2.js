// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//ARROW FUNCTION
// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// retorno implícito (simplificando) caso retorno seja 1 sentença de código (1 linha)
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

//simplificando mais caso a função arrow/flecha tenha apenas um parâmetro
const imprimir = a => ++a
console.log(imprimir(1))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')