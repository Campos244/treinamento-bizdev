
let vetorCores = ["azul", "amarelo", "rosa", "roxo", "verde"];

//Para mostrar o primeiro elemento do vetor
console.log(vetorCores[0]);

//Para mostrar o último elemento do vetor
console.log(vetorCores[vetorCores.length - 1]);


for (var i = 0; i <vetorCores.length; i++){
    console.log(vetorCores[i]);
}


while(j =0 <= vetorCores.lenght){
    console.log(vetorCores[j]);
    j++;
}

//método push adiciona um alemento no final do vetor
vetorCores.push("Laranja");
console.log(vetorCores);

//método Pop tira o último elemento do vetor
vetorCores.pop();
console.log(vetorCores);

//método unshift para adicionar um elemento na primeira posição do vetor
vetorCores.unshift("Preto");
console.log(vetorCores);

//método concat para juntar diferentes arrays
vetorCoresClaras = ["bege", "off white", "branco"];

var diferentesCores = vetorCores.concat(vetorCoresClaras);
console.log(diferentesCores);



