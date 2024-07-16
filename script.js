let form = document.querySelector("form")
let inputs = document.querySelectorAll("input") 

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let numeroA =  inputs[0]
    let numeroB = inputs[1]
    let mesage = document.querySelector("#message")
    let bMaior = numeroB.value > numeroA.value ? true : false
    
    let mostrarMessage = () => mesage.style.display = "block"
    let esconderMessage = () => mesage.style.display = "none"
    let limparInputs = () => {
        for (input of inputs){
            input.value = ""
        }
    }

    if (bMaior){
        mesage.style.color = "green"
        mesage.innerHTML = `${numeroB.value} é maior que ${numeroA.value}`
        mostrarMessage()
        setTimeout(esconderMessage, 2000)
        setTimeout(limparInputs, 2000)
    }

    else if (numeroB.value === numeroA.value){
        mesage.style.color = "yellow"
        mesage.innerHTML = `${numeroB.value} é igual a ${numeroA.value}`
        mostrarMessage()
        setTimeout(esconderMessage, 2000)
        setTimeout(limparInputs, 2000)
    }

    else {
        mesage.style.color = "red"
        mesage.innerHTML = `${numeroB.value} não é maior que ${numeroA.value}`
        mostrarMessage()
        setTimeout(esconderMessage, 2000)
        setTimeout(limparInputs, 2000)
    }


})