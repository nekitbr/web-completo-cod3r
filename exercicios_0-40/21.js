// 21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniadoconsiderando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menosde 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados comidade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130



function preco(idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(preco(15));
console.log(preco(23));
console.log(preco(35));
console.log(preco(52));
console.log(preco(80));