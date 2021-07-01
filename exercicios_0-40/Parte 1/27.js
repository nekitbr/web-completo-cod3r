// 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.


function crescimento(alt1, t1, alt2, t2) {
    if(alt1 == alt2){
        if (t1 > t2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(t1 < t2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (alt1 > alt2) {
            if(t1 >= t2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return tempo(alt2, t2, alt1, t1) 
            }
        } else {
            if(t2 >= t1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return tempo(alt1, t1, alt2, t2) 
            }
        }
    }
}

function tempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(crescimento(150, 2, 130, 4))