// 07)​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:“Delta é negativo”.

// “ax2”, “bx” e “c”
// 3x² - 5x + 12
// 3,    -5,  12

function Bhaskara(a=1, b=1, c=1){
    let delta = (b**2) - (4*a*c)
    
    if (delta < 1){
        console.log('Delta é negativo.')
    }else{
        let resultado = []
        resultado.push((-b + Math.sqrt(delta))/2 * a)
        resultado.push((-b - Math.sqrt(delta))/2 * a)
        console.log(resultado)
    }
}

Bhaskara(1, 12, -13)