// Exercício.

// Crie um vetor com o nome de seus familiares.
// Com seis nomes.

// Use todos os comandos vistos em vetores após criar a lista.

const listaDeFamiliares = ["Gildete", "Solange", "Moacir", "Sueli", "Ana Cristina", "Ângela"]

console.log(" =+= FAMILIARES =+=")
console.log(listaDeFamiliares)

console.log("\n +++ ADICIONANDO FAMILIAR +++")
listaDeFamiliares.push("Abelim")
console.log(listaDeFamiliares)

console.log("\n _-_-_ REMOVENDO FAMIILIAR _-_-_")
listaDeFamiliares.splice(1,3)
console.log(listaDeFamiliares)

console.log("\n _-_-_ REMOVENDO O ÚLTIMO FAMIILIAR _-_-_")
listaDeFamiliares.pop()
console.log(listaDeFamiliares)

console.log("\n _-_-_ REMOVENDO O PRIMEIRO FAMIILIAR _-_-_")
listaDeFamiliares.shift()
console.log(listaDeFamiliares)