// 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.


function mediaPonderada(ID=null, a=0, b=0, c=0){
    let temp=[]
    temp.push(a, b, c)
    temp.sort((a, b) => (a < b) ? 1 : -1)
    let media = (temp[0]*4 + temp[1]*3 + temp[2]*3)/10
    console.log(`Aluno: ${ID}\nNota 1: ${a}\nNota 2: ${b}\nNota 3: ${c}\nMédia: ${media}\nSituação: ${media >= 5 ? 'Aprovado' : 'Reprovado'}\n`)
}

mediaPonderada()
mediaPonderada(345, 9, 6, 10)
mediaPonderada(456, 5, 1, 8)
mediaPonderada(789, 1, 0, 6)
mediaPonderada(undefined, undefined, undefined, undefined)
