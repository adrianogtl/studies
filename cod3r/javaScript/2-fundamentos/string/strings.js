const escola = "Cod3r";// string é um conjunto de caracteres
//índice começa no 0, 1, 2, 3...
console.log(escola.charAt(4));// me dá o caractere que está no índice 4
console.log(escola.charAt(5));// se não houver o caractere, ele retorna nada.
console.log(escola.charCodeAt(3));// me dá o caractere no valor da tabela unicode
console.log(escola.indexOf('3'));// me dá o índice do caractere (se houver)

console.log(escola.substring(1));// me dá apartir do índice 1
console.log (escola.substring(0, 3));//me dá no intervalo do 0 até antes do 3

console.log('Escola ' .concat(escola).concat("!"));// concatenar (juntar coisas)
console.log(escola.replace('o', 'u'));//substitui em escola o '3' pelo 'e'
console.log('Ana,Maria,Pedro'.split(','));
 