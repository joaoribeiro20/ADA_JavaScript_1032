
//estrutura base da class
class   Quadrado{
    
    //o atributos não possui nenhuma palavra reservada para ser definido, apenas colocar o nome e pronto
    //a # é igual ao private de java, usando o # e depois o nome privamos o atributo, dando acesso aquele atirbuto apenas dentro da class, sendo necessario usar o get e o set para acessar
    
    //atributos
    #lado // atributo privado
    cor  // atributo publico
    #area // atributo privado

    constructor(lado, cor){
        this.#lado = lado
        this.cor = cor
        this.#area = this.#calcularArea()
    }

    get area(){
        return thais.#area
    }
    get lado(){
        return this.#lado
    }

    set lado(l){
        this.#lado = l
        this.#area = this.#calcularArea()
    }
    #calcularArea(){
        return Math.pow(this.#lado, 2)
    }

}

const quadrado = new Quadrado(10, 'vermelho')
console.log(quadrado.area)
quadrado.lado = 5