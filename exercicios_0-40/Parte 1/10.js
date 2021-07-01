// 10)​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne trueou false.

function divisivelPor3(dividendo=3){
    if(dividendo%3 === 0){
        return true
    } else {
        return false
    }
}

console.log(divisivelPor3(0))
console.log(divisivelPor3(1))
console.log(divisivelPor3(2))
console.log(divisivelPor3(3))
console.log(divisivelPor3(4))