// 04)​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function resto(dividendo=1, divisor=1){
    console.log(`seu resultado é ${dividendo/divisor}`)
    console.log(`seu resto é ${dividendo%divisor}`)
}

resto(5, 2)
resto(4, 2)