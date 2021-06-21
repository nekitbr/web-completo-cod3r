// 28)​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.



function leitor(vetor=[0]){
    let pares = 0
    let impares = 0
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i]%2 == 0){
            pares++
        } else {
            impares++
        }
    }
    return ['pares: ', pares, '\nimpares: ', impares]
}

lista = [7, 4, 165, 5, 132, 2, 16, 15, 56, 6, 4, 8, 7, 65, 4, 54, 987, 187,84, 81]
console.log(leitor(lista))