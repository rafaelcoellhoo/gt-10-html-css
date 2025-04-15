const user = {
    nome: "Rafael",
    altura: 1.85,
    peso: 120
}

//criar função que receba o objeto user e calcule o IMC
// peso / (altura * altura) - //.tofixed(número de casas decimais após a vírgula)

function calcularIMC(user){
    const imc = user.peso / (user.altura * user.altura)
    if(imc < 16){
       return console.log("Magreza Grave")} 
    if(imc >= 16 && imc < 16.9){
        return console.log("Magreza Moderada")} 
    if(imc >= 17 && imc < 18.5){
       return console.log("Magreza Leve")}
    if(imc >= 18.5 && imc < 24.9){
       return console.log("Peso Normal")}
    if(imc >= 25 && imc < 29.9){
       return console.log("Sobrepeso")}
    if(imc >= 30 && imc < 34.9){
       return console.log("Obesidade grau I")}
    if(imc >= 35 && imc < 39.9){
       return console.log("Obesidade grau II")}
    if(imc > 40){
       return console.log("Obesidade grau III")}
}

calcularIMC(user)
