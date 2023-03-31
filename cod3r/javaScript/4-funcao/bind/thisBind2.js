function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++ // this.idade não aponta para o objeto Pessoa e sim para set
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa //new: Instanciar