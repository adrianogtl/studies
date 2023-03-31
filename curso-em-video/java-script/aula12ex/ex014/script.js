function relogio() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    var horario = document.getElementById('horario')
    var imagem = document.getElementById('imagem')
    horario.innerHTML = `<p>Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos.</p>`
    if (hora >= 0 && hora < 12) {
        imagem.innerHTML = '<img src="images/morning.png" alt="Imagem da manhã" title="Imagem da manhã">'
        document.body.style.backgroundColor = '#c8cece'
    } else if (hora >= 12 && hora < 18) {
        imagem.innerHTML = '<img src="images/afternoon.png" alt="Imagem da tarde" title="Imagem da tarde">'
        document.body.style.backgroundColor = '#f2ac63'
    } else {
        imagem.innerHTML = '<img src="images/evening.png" alt="Imagem da noite" title="Imagem da noite">'
        document.body.style.backgroundColor = '#4a4d50'
    }
}
//refresh na function relogio() a cada 1000ms (1s) para informar os segundos
var intervalo = setInterval(relogio, 1000);