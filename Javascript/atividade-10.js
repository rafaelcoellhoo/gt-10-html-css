const user = {
    nome: "Rafael",
    idade: 27
}

const produtos = [
    {nome: "Maçã", preco: 2.50},
    {nome: "iPhone", preco: 5500}
]

const produtosMaiorDeIdade = [
    {nome: "51", preco: 50},
    {nome: "Jack Daniels", preco: 100}
]

if(user.idade >= '18'){
    console.log(produtos,produtosMaiorDeIdade)
} else{
    console.log(produtos)
}