let dobro = function (a) {
    return 2 * a
}

// Arrow function
dobro = (a) => {
    return 2 * a
}

// Arrow function de 1 linha
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // Sem param
ola = _ => 'Olá' // Param underline
console.log(ola())