// 22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juroscompostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.



function realabnt2(valor=null){
    return valor.toFixed(2).toString().replace('.',',')
}

function calculaJuros(mes=0, preco=0){
    if((mes>0) && (mes<13)){
        return realabnt2(preco*(1+0.05)**(mes-1))
    } else {
        return 'Mês inválido, tente novamente de 1 a 12'
    }
}

console.log(calculaJuros())
console.log(calculaJuros(-1, 100))
console.log(calculaJuros(13, 100))
console.log(calculaJuros(1, 100))
console.log(calculaJuros(12, 100))
