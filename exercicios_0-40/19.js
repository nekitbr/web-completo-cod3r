// 19)​O cardápio de uma lanchonete é o seguinte: 
// https://prnt.sc/15xnmpu
// Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valora ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use ocomando switch. Crie um caso default para produto não existente.


function caixa(id, qt){
    switch (id) {
        case 100:
            return qt*3

        case 200:
            return qt*4

        case 300:
            return qt*5.5

        case 400:
            return qt*7.5

        case 500:
            return qt*3.5

        case 600:
            return qt*2.8
    
        default:
            return 'Produto não existente.'
    }
}



console.log(caixa())
console.log(caixa(100, 2))
console.log(caixa(200, 2))
console.log(caixa(300, 2))
console.log(caixa(400, 2))
console.log(caixa(500, 2))
console.log(caixa(600, 2))
console.log(caixa(700, 2))