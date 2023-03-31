{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            } //variavel var é visivel (global) fora de qualquer bloco, MENOS FUNCTION
        }
    }
}//Escopo: até onde aquela variável é acessível
console.log(sera)

function teste() {
    var local = 123  //var não é vísivel fora de uma function

}
teste()
console.log(local)