// 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
//   _______________
//  |PLANO | AUMENTO|
//  |  A   |   10%  |
//  |  B   |   15%  |
//  |  C   |   20%  |
//Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seunovo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.


function realabnt2(valor=null){
    return valor.toFixed(2).toString().replace('.',',')
}

function salario(salario=0, plano){
    switch (plano) {
        case 'A': case 'a':
            return realabnt2(salario*1.10)
    
        case 'B': case 'b':
            return realabnt2(salario*1.15)

        case 'C': case 'c':
            return realabnt2(salario*1.20)

        default:
            return 'Plano inválido.'
    }
}
console.log(salario(100, ''))
console.log(salario(100, 'A'))
console.log(salario(100, 'a'))
console.log(salario(100, 'B'))
console.log(salario(100, 'b'))
console.log(salario(100, 'C'))
console.log(salario(100, 'c'))
console.log(salario(100, 'D'))
console.log(salario(100, 'd'))
