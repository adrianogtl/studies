// Função em JS é First-Class Object (Citizens)
// Higher-order function
// Função pode ser trabalhada como dado, podendo ser passada como parâmetro, 
// ser armazenada dentro de uma variável, pode ter uma outra função dentro dela, etc...

// criar de forma literal
// função anônima: sem nome
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array (de forma literal ou por variável)
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = { }
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
// OU
const cincoMais =  soma(2, 3)
cincoMais(4)