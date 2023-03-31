document.querySelector('input[type="button"').addEventListener('click', contar)
function contar() {
    let iniciotxt = document.getElementById('inicio')
    let fimtxt = document.getElementById('fim')
    let passotxt = document.getElementById('passo')
    let resultado = document.getElementById('resultado')
    if (iniciotxt.value.length == 0 || fimtxt.value.length == 0) {
        resultado.innerHTML = `<p>Impossível contar!</p>`
    } else {
        inicio = Number(iniciotxt.value)
        fim = Number(fimtxt.value)
        passo = Number(passotxt.value)
        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
            passotxt.value = '1'
        }
        resultado.innerHTML = `<P>Contando...</p>`
        if (inicio < fim) {
            for (c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c} &#x1F449 `
            }
        } else {
            for (c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += `${c} &#x1F449 `
            }
        }
        resultado.innerHTML += `&#x1F3C1`
    }
}