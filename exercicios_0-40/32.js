// 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.



function leitor(vetor=[null]){
    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma/vetor.length
}


lista = [15, 32, -1, 15, -24, 5]

console.log(leitor(lista))