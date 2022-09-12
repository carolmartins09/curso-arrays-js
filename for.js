const numeros = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < numeros.length; i++){
     console.log(i, numeros[i]);
 }


// media com for

 const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;

console.log(media)