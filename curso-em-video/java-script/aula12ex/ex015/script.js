function verificar() {
    let nascimentotxt = document.getElementById('nascimento')
    let nascimento = Number(nascimentotxt.value)
    let sexo = document.getElementsByName('sexo')
    const data = new Date()
    const ano = data.getFullYear()
    if (nascimentotxt.value == 0 || nascimentotxt.value > ano) {
        alert('[INVÁLIDO] Digite um valor Válido!')
    } else {
        let idade = ano - nascimento
        let genero = ''
        let imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'um Homem'
            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'images/foto-bebe-m.png')
            } else if (idade < 18) {
                imagem.setAttribute('src', 'images/foto-jovem-m.png')
            } else if (idade < 60) {
                imagem.setAttribute('src', 'images/foto-adulto-m.png')
            } else {
                imagem.setAttribute('src', 'images/foto-idoso-m.png')
            }
        } else {
            genero = 'uma Mulher'
            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'images/foto-bebe-f.png')
            } else if (idade < 18) {
                imagem.setAttribute('src', 'images/foto-jovem-f.png')
            } else if (idade < 60) {
                imagem.setAttribute('src', 'images/foto-adulto-f.png')
            } else {
                imagem.setAttribute('src', 'images/foto-idoso-f.png')
            }
        }
        let resultado = document.getElementById('resultado')
        resultado.style.textAlign = 'center'
        imagem.style.marginTop = '15px'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(imagem)
    }
}