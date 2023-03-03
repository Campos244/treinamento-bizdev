
let numeros = ['10', '7', '9', '13', '21', '16', '8'];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[numeros.length - 1]);


let j = 0;
while (j < numeros.length) {
    console.log(numeros[j]);
    j++;
}

numeros.forEach(numero => console.log(numero)); //criar outros arrays e treinar o ForEach
numeros.forEach(numero => console.log(`o número é ${numero}`));

let arrayMapeado = numeros.map(elemento => parseInt(elemento));

console.log(arrayMapeado);

console.log(numeros.indexOf(9));

console.log(arrayMapeado.filter(n => n >= 10));

console.log("Beatriz".includes("b"));

console.log(numeros.slice(2));

var ano = 2023;
var data = new Date();
var meuArray = [ano, data];

var resultado = meuArray.toLocaleString();
console.log(resultado);


