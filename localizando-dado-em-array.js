const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaAlunos = [10, 7, 9, 6];

let listaNotasAlunos = [alunos, mediaAlunos];

const exibeNomeNota = (nomeDoAluno) => {  //function arrow
    if (listaNotasAlunos[0].includes(nomeDoAluno)) {  //includes retorna true ou false
        let indice = listaNotasAlunos[0].indexOf(nomeDoAluno);  //indexOf retorna onde se localiza o dado no array
        return listaNotasAlunos[0][indice] + ', sua média é ' + listaNotasAlunos[1][indice];
    } else {
        return "Aluno não está cadastrado.";
    }
}

console.log(exibeNomeNota("Ana"))
console.log(exibeNomeNota("Pedro"))   // aluno não cadastrado
console.log(exibeNomeNota("João"))