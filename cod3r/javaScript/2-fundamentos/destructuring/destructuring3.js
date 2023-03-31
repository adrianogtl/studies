function rand({ min = 0, max = 1000 } = {}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log('valor entre 50 e 40: ', rand(obj))
console.log('valor entre 955 e 1000: ', rand({ min: 955 }))
console.log('valor entre os valores padrões 0 e 1000: ', rand({}))
console.log(rand('valor entre valores padrões também: ',))