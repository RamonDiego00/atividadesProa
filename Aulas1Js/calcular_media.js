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
    $(".result-value").html(media)

    if(media >= 7) {
        $(".description-result").html(`Parabéns, a sua nota é ${media}`)
    }
    else if(media < 7 && media > 4 ) {
        $(".description-result").html(`Você precisa melhorar`)
        $(".img-result").attr("src", "https://www.cursosapientia.com.br/admimg/siteBlog/cacd-diplomata-itamaraty-diplomacia-o-que-voce-precisa-saber-antes-de-comecar-a-estudar-para-o-cacd.png")
    }
    else {
        $(".description-result").html(`Não sei o que vc fez mas esudar é que não foi,sua nota final é ${media}`)
        $(".img-result").attr("src", "https://giphy.com/embed/u2wg2uXJbHzkXkPphr/video")
    }
     

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