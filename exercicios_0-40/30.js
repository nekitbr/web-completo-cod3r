// 30)​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.



function leitor(vetor=[null]){
    let menor = null
    let maior = null
    vetor.sort()
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior){
            maior = vetor[i]
        } else if (vetor[i] < maior){
            menor = vetor[i]
        }
    }
    return ['maior: ', maior, '\nmenor: ', menor]
}

lista = [-999, -5, 0, 5, 999]

console.log(leitor(lista))