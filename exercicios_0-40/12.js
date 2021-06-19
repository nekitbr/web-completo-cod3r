// 12)​ Faça um algoritmo que calcule o fatorial de um número.



function fatorial(fatorial=0){
    let resultado = fatorial;
    for (let i = 1; i < fatorial; i++) {
        resultado *= i;
    }
    return resultado
}

console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(5))
