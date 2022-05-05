    var carne;
    var cerveja;
    var bebidas;

    var resultado = document.getElementById("resultado");

function calcular(){

    var adultos = document.getElementById("adultos").value;
    var criancas = document.getElementById("criancas").value;
    var duracao = document.getElementById("duracao").value;

    if (duracao >= 6){
        carne = (650 * adultos) + (325 * criancas);
    }
    else{
        carne = (400 * adultos) + (200 * criancas);
    }
    var kgCarne = carne / 1000;

    if (duracao >= 6){
        cerveja = 2000 * adultos
    }
    else{
        cerveja = 1200 * adultos;
    }
    var latasCerveja = Math.round(cerveja / 355);

    if (duracao >= 6){
        bebidas = (1500 * adultos) + (750 * criancas);
    }
    else{
        bebidas = (1000 * adultos) + (500 * criancas);
    }  
    garrafaBebida = Math.round(bebidas / 2000);
    
    resultadoCarne.innerHTML = `<p>Serão ${kgCarne}kg de Carne`
    resultadoCerveja.innerHTML = `<p>Serão ${latasCerveja} latas de Cerveja`
    resultadoSuco.innerHTML = `<p>Serão ${garrafaBebida} garrafas de suco 2L ou refri`
}