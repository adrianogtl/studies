const prod1 = {}
prod1.nome = 'Celular Ultra mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //EVITAR ATRIBUTOS COM ESPAÇO
console.log(prod1)

const prod2 = { //estrutura aninhada de objetos (pode ter mesmo identificador em camadas diferentes!)
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)
// isso é um JSON (forma textual)
// para troca de dados entre sistemas - Java Script Object Notation
// {"nome": "Camisa Polo", "preco": 79.90, "obj": {"blabla": 1, "obj": {"blabla": 2}}}



