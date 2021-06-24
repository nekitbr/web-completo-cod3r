// 36)​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.



let list1 = [0, 1, 2, 3, 4, 5]


function multiplica1(list=[], mult=1){
    let temp = []

    for (let i = 0; i<list.length; i++){
        temp.push(list[i]*mult)
    }
    return temp
}

function multiplica2(list=[], mult=0){
    if (mult > 5){
        let temp = []

        for (let i = 0; i<list.length; i++){
            temp.push(list[i]*mult)
        }
    return temp

    } else {
        return list
    }
}

console.log(multiplica1(list1))
console.log(multiplica1(list1, 2))
console.log(multiplica1(list1, 10))
console.log(multiplica2(list1))
console.log(multiplica2(list1, 2))
console.log(multiplica2(list1, 6))