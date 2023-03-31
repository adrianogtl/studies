const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// bind() refencia o this para o objeto que você passou
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()