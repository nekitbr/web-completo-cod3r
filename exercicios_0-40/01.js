// 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.

function calculo(x=0, y=0){
    console.log(`Soma: ${x+y}`)
    console.log(`Subtração: ${x-y}`)
    console.log(`Multiplicação: ${x*y}`)
    console.log(`Divisão: ${x/y}`)
}

calculo(2, 2)

calculo(1, 1)

calculo(0, 0)

calculo(-1, -1)