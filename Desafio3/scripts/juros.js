function calcular_juros() {
    // Declaração de variáveis
    var nome,c,i,t,juros;

    // Entrada de dados
    nome = ($("#nome").val())
    c = Number ($("#mensal").val())
    i = Number ($("#taxa").val())
    t = Number ($("#time").val())

    


    // Processamento de Dados
    juros = Number (c* Math.pow((1 + i),t)).toFixed(-2)
    juros.toString()
    
    

    // Saída de Dados
    $(".form-juros").addClass("d-none")
    $(".resultado").removeClass("d-none")
    $(".result-value").html(juros)

        $(".aviso").html(`Olá! ${nome}`)
       $(".anuncio").html(`juntando R$${c} todo mês, você terá R$${juros} em ${t} anos`) 

    // console.log("Média é igual a "+media);
    // alert("Média é igual a "+media); 

    return false
}

function voltar() {
    $("input").val("")
    $(".form-juros").removeClass("d-none")
    $(".resultado").addClass("d-none")
}