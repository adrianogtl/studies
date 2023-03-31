//hoisting / içamento
//NÃO TEM MOTIVO PRA USAR, SÓ TRAZ CONFUSÃO. declare as variáveis primeiro!
console.log('a =', a)
var a = 2
console.log('a =', a)

// o código de cima faz o mesmo do de baixo

var a
console.log('a =', a)
a = 2
console.log('a =', a)

//variável com let NÃO OCORRE içamento.