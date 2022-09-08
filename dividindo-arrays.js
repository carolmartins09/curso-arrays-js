const nomesAlunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomesAlunos.slice(0, nomesAlunos.length / 2);
const sala2 = nomesAlunos.slice(nomesAlunos.length / 2);

console.log("tamanho da array: ", nomesAlunos.length)

console.log(`Os alunos da Sala 01 são ${sala1}.`)
console.log(`Os alunos da Sala 02 são ${sala2}.`)