//lista de modelos de carros

const modelos = ["civic", "polo", "corolla", "x3", "celta", "350z"]

console.log(modelos)

//adicionando modelos

modelos.push("gol", "palio", "range rover")

console.log(modelos)

//contagem
console.log(modelos.length)

modelos.push("troller")

console.log(modelos.length)

//remover o ultimo modelo

modelos.pop()

console.log(modelos.length)

//remover modelo específico
modelos.splice(1, 1) //remove o modelo na posição 1

console.log(modelos)