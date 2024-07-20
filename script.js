$(document).ready(() => {
  let listaNomeTarefas = []
  let avisoTxt = $("#avisoTxt")
  let avisoTarefas = $("#avisoTarefas")

  $("form").on("submit", (e) => {
    e.preventDefault()
    let nomeTarefa = $("input").val().trim()

    let limparInput = () => { 
      $("input").val("")
    }

    let darAviso = (aviso) => {
      avisoTxt.fadeIn(300)
      avisoTxt.text(aviso)
      avisoTxt.css("color", "red")
      setTimeout(() => {
        avisoTxt.text("")
      }, 2000)
    }

    let salvarTarefa = () => {
      listaNomeTarefas.push(nomeTarefa)
    }

    let criarTarefa = () => {
      $(`<li>
          <div></div>
          <div>${nomeTarefa}</div>
          <div><ion-icon name="ellipse-outline"></ion-icon></div>
      </li>`)
      .appendTo("ul")
      .hide()
      .fadeIn("slow")
  }

    if (listaNomeTarefas.some((tarefa) => nomeTarefa === tarefa)) {
      darAviso("Atividade existente")
      limparInput()
    } 
    else {
      avisoTarefas.css("display", "none")
      salvarTarefa()
      criarTarefa()
      limparInput()
    }
  })

  // delegação de eventos do tipo click para todos <li>
  $("ul").on("click", "li", function() {
    let icon = $(this).find("ion-icon")

    if (icon.attr("name") === "ellipse-outline") {
        icon.attr("name", "chevron-down-circle-outline")
    } else {
        icon.attr("name", "ellipse-outline")
    }
    $(this).toggleClass("completa")
})
})
