let comparaComThis = function (param) {
    console.log(this === param)
}
console.log('THIS PADRÃO')

comparaComThis(this) // O this não é o this
comparaComThis(global)

console.log()
console.log('THIS COM .BIND A UMA VARIÁVEL')
const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

console.log()
console.log('THIS EM ARROW FUNCTION')
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

console.log()
console.log('THIS EM ARROW OU BIND? QUAL É MAIS FORTE? R: ARROW')
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) // this em arrow function não varia NUNCA, mesmo forçando com o .bind()