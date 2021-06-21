// 29)​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.



function leitor(vetor=[0]){
    let dentro = 0
    let fora = 0
    for(let i = 0; i < vetor.length; i++){
        if ((vetor[i] >= 10) && (vetor[i] <= 20)){
            dentro++
        } else {
            fora++
        }
    }
    return ['dentro: ', dentro, '\nfora: ', fora]
}

lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22]
console.log(leitor(lista))