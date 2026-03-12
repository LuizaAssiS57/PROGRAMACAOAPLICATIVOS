// Vetor de objetos.
const listaDeNomes = ["Ana", "Maria", "Joana"]

// Exemplo com vetor de números
const listaDeNumeros = [1, 2, 3, 4, 5]

// Vetor de objetos com dados de nome e idade
// Um objeto carrega dados como uma classe
const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "Marta", idade: 15}
]

// Percorrendo e exibindo os elementos do vetor.
// ForEach é uma função com laço de repetição
console.log("Exibindo todos os usuários do vetor")
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisa, mas vamos usar.
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

// Como os antigos.
console.log("\nExibindo todos os usuários do vetor")
for (let i = 0; i < listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisa, por isso não vamos usar.
maioridade.forEach( usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)

console.log("\nFiltrando menores de 18 anos.")
const menoridade = listaDeUsuarios.filter(usuario => usuario.idade < 18)
menoridade.forEach( usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)

console.log("\nNa lista de números, mostre apenas números pares.")
const pares = listaDeNumeros.filter( numero => listaDeNumeros[numero] % 2 == 0)
pares.forEach( numero =>
    console.log(`${listaDeNumeros[numero]}`)
)

console.log("\nNa lista de nomes, mostre todos os nomes com forEach.")
listaDeNomes.forEach( nome => console.log(nome)) 

console.log("\nNa lista de usuários, mostre apenas os nomes.")
const nomes = listaDeUsuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nNa lista de usuários, encontre um usuário.")
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome === "Ana")
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

console.log("\nNa lista de usuários, encontre um usuário com a idade de 45 anos.")
const usuarioIdade = listaDeUsuarios.find(u => u.idade === 45)
console.log(`O usuário ${usuarioIdade.nome} tem ${usuarioIdade.idade} anos.`)

console.log("\nNa lista de usuários, somando todas as idades:")
const somaIdades = listaDeUsuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(somaIdades)