// 38)​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.



function impar(inicio=0, fim=100){
    if (inicio > fim){
        let cache = 0
        cache = inicio
        inicio = fim
        fim = cache
        cache = undefined
    }

    let temp = []
    for(let n=inicio; n<=fim; n++){
        (n%2 != 0) ? temp.push(n) : false
    }
    return temp
}

console.log(impar())
console.log(impar(0, 10))
console.log(impar(-1, 11))
console.log(impar(0, 0))