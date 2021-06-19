// 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function realabnt2(valor=null){
    return valor.toFixed(2).toString().replace('.',',')
}

function jurosSimples(c=0, i=0, t=0){
    let jurosSimples = c * i * t
    console.log(`Seu capital com juros simples será de R$${realabnt2(c + jurosSimples)} , ou seja, um rendimento de R$${realabnt2(jurosSimples)}`)
}

function jurosCompostos(c=0, i=0, t=0){
    let montante = c * ( (1+i) ** t )
    console.log(`Seu capital com juros compostos será de R$${realabnt2(montante)} , ou seja, um rendimento de R$${realabnt2(montante - c)}`)
}

jurosSimples(25000, 0.05, 12)
jurosCompostos(25000, 0.04, 12)