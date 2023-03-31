//par nome/valor
const saudação = 'Opa' // contexto léxico 1

function exec() {
    const saudação = 'Falaaa' // contexto léxico 2
    return saudação
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}