// 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.


function caixaEletronico(monte) {

    if (Math.floor(monte / 100) > 0) {
        console.log(Math.floor(monte / 100))    // notas de 100;
    }

    if (Math.floor(monte / 50) > 0) {
        console.log(Math.floor(monte % 100 / 50))    // notas de 50;
    }

    if (Math.floor(monte % 50 / 20) > 0) {
        console.log(Math.floor(monte % 100 % 50 / 20))    // nota(s) de 20 reais;
    }

    if (Math.floor(monte % 50 % 20 / 10) > 0) {
        console.log(Math.floor(monte % 100 % 50 % 20 / 10))    // nota(s) de 10 reais;
    }

    if (Math.floor(monte % 50 % 20 % 10 / 5) > 0) {
        console.log(Math.floor(monte % 100 % 50 % 20 % 10 / 5))    // nota(s) de 5 reais;
    }

    if (Math.floor(monte % 50 % 20 % 10 % 5) > 0) {
        console.log(Math.floor(monte % 100 % 50 % 20 % 10 % 5))    // nota(s) de 1 real.
    }
}

caixaEletronico(264)