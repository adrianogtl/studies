const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// for in : pra pegar os índices do array
for(let i in notas) {
    console.log(i)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Sival',
    idade: 29,
    peso: 64
}

// for in: pra pegar os atributos de um objeto
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}