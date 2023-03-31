document.querySelector('input[type="button"]').addEventListener('click', tabuada)
function tabuada() {
    let numerotxt = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')
    if (numerotxt.value.length <= 0) {
        alert('Digite um número!')
    } else {
        numero = Number.parseInt(numerotxt.value)
        tabuada.innerHTML = ''
        for (m = 0; m <= 10; m++) {
                let resultado = numero * m
                tabuada.innerHTML += `<option value="${m}">${numero} x ${m} = ${resultado}</option>`
        }
    }
}