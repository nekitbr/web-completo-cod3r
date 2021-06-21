// 31)​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.



function leitor(vetor=[null]){
    let negativos = 0

    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            negativos++
        }
    }
    return negativos
}


lista = [-1, -2, -3, -4, -5, -6, 0, 1, 2, 3, 4, 5, 6]

console.log(leitor(lista))