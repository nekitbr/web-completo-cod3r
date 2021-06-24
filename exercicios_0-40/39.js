// 39)​ Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.



list0 = [0, 1, 2, 3, 4]
list01 = [5, 6, 7, 8, 9]

function exchange(list1=[], list2=[]){
    // adiciona toda a lista 2 pra lista 1
    for (let i=0; i<list2.length; i++){
        list1.push(list2[i])
    }

    // adiciona metade da lista 1 pra lista 2
    for (let i=0; i<list1.length/2; i++){
        list2.push(list1[i])
    }

    // reverse pra dar pop nas listas
    list1.reverse()
    list2.reverse()
    for (let i=0; i<list2.length/2; i++){
        list1.pop()
    }
    for (let i=0; i<list1.length; i++){
        list2.pop()
    }

    // reverse pra voltar ao normal
    list1.reverse()
    list2.reverse()

    return [list1, list2]
}

console.log(exchange(list0, list01))
