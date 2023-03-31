document.querySelector('input#adicionar').addEventListener('click', adicionar)
document.querySelector('input#finalizar').addEventListener('click', finalizar)
let numero = document.querySelector('input#numero')
let resultadoLista = document.querySelector('select#resultadoLista')
let resultado = document.querySelector('div#resultado')
let lista = [] //array pra armazenar os números válidos
// numero = Number(numero.value)
// lista = Number(lista.value)
function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnumero(numero.value) && inlista(Number(numero.value), lista)) {
        lista.push(Number(numero.value),)
        resultadoLista.innerHTML += `<option>Valor ${numero.value} adicionado.</option>`
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (lista.length <= 1) {
        alert('Adicione 2 ou mais valores antes de finalizar!')
    } else {
        resultado.innerHTML = `<p>Há ${lista.length} valores cadastrados.</p>`
        lista.sort(function (a, b) { return a - b }) //converter o metodo .sort() de ordem alfabética pra ordem numérica
        resultado.innerHTML += `<p>O menor valor é ${lista[0]}</p>`
        resultado.innerHTML += `<p>O maior valor é ${lista[lista.length - 1]}</p>`//o ultimo índice do array lista é o total de valores cadastrados -1 (pois array começa no índice 0)
        let soma = 0
        for (i = 0; i <= (lista.length - 1); i++) { //laço pra somar cada valor do array lista onde i == índice do array
            soma += lista[i]
        }
        resultado.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        let media = soma / lista.length
        resultado.innerHTML += `<p>A média dos valores é ${media.toFixed(2).replace('.', ',')}</p>`
    }
}