/*
criar uma tela de adição de pessoas
alunos, professor e pedagogico
nome, email, idade e selecionar qual o tipo da pessoa
*/
class Pessoa{
    nome
    email
    idade

    constructor(nome, email, idade){
        this.nome = nome
        this.email = email
        this.idade = idade
       
    }
}
class Alunos extends Pessoa{
    nota
}
class Professor extends Pessoa{
  materia
}
class Pedagogico extends Pessoa{
  cargo
}

const listPessoas=[]

let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let email = document.getElementById('email')
let rank = document.getElementById('classes')


function salvar(){
    console.log(rank.value)
  switch(rank.value){
    case 'aluno': let aluno = new Alunos(nome.value, email.value, idade.value, rank.value)
    document.getElementById("demo").innerHTML = aluno;
    break
    case 'professor': 
    break
    case 'pedagogico':
        break
  }
      
}
  
    
