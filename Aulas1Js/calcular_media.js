function calcular_media() {
    // Declaração de variáveis
    var nota1,nota2,nota3,nota4,media;

    // Entrada de dados
    nota1 = Number ($("#nota1").val())
    nota2 = Number ($("#nota2").val())
    nota3 = Number ($("#nota3").val())
    nota4 = Number ($("#nota4").val())
    


    // Processamento de Dados
    media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Saída de Dados
    $(".form-notas").addClass("d-none")
    $(".show-result").removeClass("d-none")
    $(".result-value").html(media);

    // console.log("Média é igual a "+media);
    // alert("Média é igual a "+media);


    return false
}

function voltar() {
    $("input").val("")
    $(".form-notas").removeClass("d-none")
    $(".show-result").addClass("d-none")
    $(".result-value").html("...")
}