// https://prnt.sc/181lrb4



function inverso(valor=null){
    if (typeof valor == 'number'){
        return valor*-1
    } else if (typeof valor == 'boolean'){
        return !valor
    } else {
        return 'booleano ou número esperados, mas o parâmetro é do tipo string'
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(1))
console.log(inverso(0))
console.log(inverso(5))
console.log(inverso(-5))
console.log(inverso('a'))