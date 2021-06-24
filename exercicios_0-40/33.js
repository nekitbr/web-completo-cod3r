import concat from 'concat';
// 33)​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.


let vetorInteiro = [0, 1, 2, 3]
let vetorString = ['zero, um, dois, três']
let vetorDouble = [0.01, 0.02, 0.03, 0.04]
console.log(vetorInteiro.concat(vetorString, vetorDouble))
console.log(vetorString.concat(vetorDouble))