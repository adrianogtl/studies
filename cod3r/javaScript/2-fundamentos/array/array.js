const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //retorna undefined

valores[4] = 10 //cria novo indice atribuindo um valor a ele
console.log(valores)
console.log(valores.length) //informa quantos indices tem o array

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //retira o valor do ultimo indice e remove do array
console.log(valores)
delete valores[0] //deleta o valor do indice
console.log(valores)

console.log(typeof valores)