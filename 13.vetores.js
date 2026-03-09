// Vetores.

const listaDeNomes = ["Marta", "José", "Maria"]

console.log("Exibindo todos os elementos:")
console.log(listaDeNomes)

console.log("\nExibindo o primeiro elemento: ")
console.log(listaDeNomes[0])

console.log("\nAdicionando um elemento: ")
listaDeNomes.push("Marília")
console.log(listaDeNomes)

console.log("\nMais um nome: ")
listaDeNomes.push("Luiza")
console.log(listaDeNomes)

// Sua vez, apartir do índice 2, remover apenas 1 elemento.
console.log("\nRemovendo um elemento: ")
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

// Sua vez, remova apenas o segundo elemento da lista.
console.log("\nRemovendo um elemento: ")
listaDeNomes.splice(1,1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o último elemento: ")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento: ")
listaDeNomes.shift()
console.log(listaDeNomes)
