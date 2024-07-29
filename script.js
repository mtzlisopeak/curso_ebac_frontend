$(document).ready(function(){

  $("#number").mask("(00) 00000-0000")

  $("form").validate({

      rules : {
        name: {required: true, rangelength: [8, 15]},
        email: {required: true, email: true},
        number: {required: false, minlength: 11},
        terms: {required: true}
        },
      messages: {
        name: "Name is required.",
        email: "Email is required.",
        number: "Number incomplete",
        terms: "Accept the terms and conditions."
        },
      }
    )
  }
)