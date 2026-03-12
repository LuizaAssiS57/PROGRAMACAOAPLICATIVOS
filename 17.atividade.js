const listaDeAlunos = [
    {nome: "Ana", nota: 5.0},
    {nome: "Bruno", nota: 10.0},
    {nome: "Carla", nota: 2.0},
    {nome: "Andrea", nota: 7.0},
    {nome: "Marta", nota: 6.0}
]

console.log("Encontre a aluna Marta e mostra o nome e a média dela.")
const alunoEncontrado = listaDeAlunos.find(aluno => aluno.nome === "Marta")
console.log(`Nome: ${alunoEncontrado.nome} \nNota: ${alunoEncontrado.nota}`)

console.log("Mostre a média geral da turma.")
const mediaGeral = listaDeAlunos.reduce((total, aluno) => total + aluno.nota, 0)
console.log(mediaGeral)

console.log("Mostre o nome e a nota dos alunos com nota abaixo de 7.0.")
const menorsete = listaDeAlunos.filter(aluno => aluno.nota < 7.0)
menorsete.forEach( aluno => 
    console.log(`Aluno: ${aluno.nome} \nNota: ${aluno.nota}`)
)

console.log("Mostre apenas o nome dos alunos com nota maior ou igual a 7.0.")
const igualmaior = listaDeAlunos.filter(aluno => aluno.nota >= 7.0)
igualmaior.forEach(aluno =>
    console.log(`${aluno.nome} ${aluno.nota}`)
)
