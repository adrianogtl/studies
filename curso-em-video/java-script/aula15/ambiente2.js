let numeros = [2, 8, 5, 1, 9]
numeros.push(7)
console.log(numeros)
//numeros.sort()//Coloca os valores em ordem crescente
console.log('Depois do método .sort()')
console.log(numeros)
for (pos in numeros) {
    console.log(`No index ${pos} tem o valor ${numeros[pos]}`)
}
let valor_buscado = numeros.indexOf(7)
if (valor_buscado == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor ${numeros[valor_buscado]} foi encontrado na posição ${valor_buscado}`)
}
