// $("body").hide();
// $("body").click(function(){           
//     //Sem parâmetros: o efeito é executado em 400ms
//     $("#minhaDiv").fadeIn();
//     //Parâmetro com a duração em ms do efeito
//     $("#minhaDiv").fadeIn(1000);
//     //Parâmetro slow: o efeito é executado em 600ms
//     $("#minhaDiv").fadeIn("slow");
//     //Parâmetro fast: o efeito é executado em 200ms
//     $("#minhaDiv").fadeIn("fast");
//     //Informada duração e função de callback
//     $("#minhaDiv").fadeIn("fast",
//         function(){
//             alert("fade concluido");
//         }
//     );
// });

var images = document.querySelectorAll('img');
new simpleParallax(images);
