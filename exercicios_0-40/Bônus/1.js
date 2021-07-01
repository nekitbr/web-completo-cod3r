const alunos = [
    {nome: 'João0', nota: 70, bolsista: false},
    {nome: 'João1', nota: 71, bolsista: true},
    {nome: 'João2', nota: 72, bolsista: false},
    {nome: 'João3', nota: 73, bolsista: true}
]


// Desafio 1: Todos os alunos são bolsistas? (com reduce)
resultado = alunos.map(e => e.bolsista).reduce(function(anterior, atual){
    return anterior && atual
})

console.log(resultado)


// Desafio 2: Algum aluno é bolsista? (com reduce)
resultado2 = alunos.map(e => e.bolsista).reduce(function(anterior, atual){
    return anterior || atual
})

console.log(resultado2)

