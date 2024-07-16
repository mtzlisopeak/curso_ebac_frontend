let form = document.querySelector("form")
let inputs = document.querySelectorAll("input") 

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let primeiroNumero =  inputs[0]
    let segundoNumero = inputs[1]
    let mesage = document.querySelector("#message")
    let primeiroMaior = primeiroNumero.value > segundoNumero.value ? true : false
    
    let mostrarMessage = () => mesage.style.display = "block"
    let esconderMessage = () => mesage.style.display = "none"
    let limparInputs = () => {
        for (input of inputs){
            input.value = ""
        }
    }

    if (primeiroMaior){
        mesage.style.color = "green"
        mesage.innerHTML = `${primeiroNumero.value} é maior que ${segundoNumero.value}`
        mostrarMessage()
        setTimeout(esconderMessage, 2000)
        setTimeout(limparInputs, 2000)
    }

    else if (primeiroNumero.value === segundoNumero.value){
        mesage.style.color = "yellow"
        mesage.innerHTML = `${primeiroNumero.value} é igual a ${segundoNumero.value}`
        mostrarMessage()
        setTimeout(esconderMessage, 2000)
        setTimeout(limparInputs, 2000)
    }

    else {
        mesage.style.color = "red"
        mesage.innerHTML = `${primeiroNumero.value} não é maior que ${segundoNumero.value}`
        mostrarMessage()
        setTimeout(esconderMessage, 2000)
        setTimeout(limparInputs, 2000)
    }


})