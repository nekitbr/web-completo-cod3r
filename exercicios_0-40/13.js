// 13)​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function util(dia){
    switch (dia) {
        case 1: case 7: 
            return 'fds'

        case 2: case 3: case 4: case 5: case 6:
            return 'útil'

        default:
            return 'Dia inválido'
    }
}

console.log(util( ))
console.log(util(0))
console.log(util(1))
console.log(util(2))
console.log(util(3))
console.log(util(4))
console.log(util(5))
console.log(util(6))
console.log(util(7))
console.log(util(8))