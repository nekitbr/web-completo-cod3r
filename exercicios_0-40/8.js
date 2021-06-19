// 08)​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho.
// Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..", escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).


let stringPontuacoes = "1, 2, 3, 4, 5, 6, -1, 0, 7, 2, 3, 4, 5, 8, 6, 44"
 

function comparador (stringPontuacoes) {
    let pontos = stringPontuacoes.split(", ")
    let countRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for (let i = 1; i < pontos.length; i++) {
        if(pontos[i] > maiorPontuacao) {
            maiorPontuacao = pontos[i]
            countRecords++
        }else if (pontos[i] < menorPontuacao) {
            menorPontuacao = pontos[i]
            piorJogo = i+1;
        }
    }
    return [countRecords, piorJogo]
}

console.log(comparador(stringPontuacoes))