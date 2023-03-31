let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        console.log(`${amigo.nome} Engordou`)
        this.peso += p
        //this -> auto referência ao objeto
    }
}
amigo.engordar(1.6)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)