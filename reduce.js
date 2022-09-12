const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSalas(notasSala){
    const somaNotas = notasSala.reduce((acum, atual) => atual + acum, 0);
    return somaNotas / notasSala.length;
}

console.log(`A média da sala de JavaScript é: ${mediaSalas(salaJS)}`)
console.log(`A média da sala de JavaScript é: ${mediaSalas(salaJava)}`)
console.log(`A média da sala de JavaScript é: ${mediaSalas(salaPython)}`)

const notas = [10, 6.5, 8, 7];
const media = notas.reduce((a, b) => a + b, 0) / notas.length;  //exemplo da 1ª aula (media.js)

console.log(media)