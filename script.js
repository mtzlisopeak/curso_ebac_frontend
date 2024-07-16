let form = document.querySelector("form")
let inputs = document.querySelectorAll("input") 

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let numeroA =  inputs[0]
    let numeroB = inputs[1]
    let mesage = document.querySelector("#message")
    let formValido = numeroB.value > numeroA.value ? true : false
    
    let mostrarMessage = () => mesage.style.display = "block"
    let esconderMessage = () => mesage.style.display = "none"
    let limparInputs = () => {
        for (input of inputs){
            input.value = ""
        }
    }

    if (formValido){
        mesage.style.color = "green"
        mesage.innerHTML = `Formulario válido`
        mostrarMessage()
        setTimeout(esconderMessage, 2000)
        setTimeout(limparInputs, 2000)
    }

    else {
        mesage.style.color = "red"
        mesage.innerHTML = `Para o formulario ser válido o número B precisa ser maior que o número A`
        mostrarMessage()
        setTimeout(esconderMessage, 2000)
        setTimeout(limparInputs, 2000)
    }


})