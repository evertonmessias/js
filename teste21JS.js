
window.onload = function () {
    document.getElementById("botao").onclick = function () {
        var calculo = imc(Number(document.getElementById("peso").value), Number(document.getElementById("altura").value));
        document.getElementById("imc").innerHTML = `IMC = ${calculo.valor}`;
        document.getElementById("cond").innerHTML = calculo.condicao;
        console.log(calculo.valor, calculo.condicao);
    }
}

function imc(peso, altura) {
    let valor = 0;let condicao = "";
    if ((peso >= 20 && peso <= 200) && (altura >= 1 && altura <= 2.5)) {
        valor = (peso / (Math.pow(altura, 2))).toFixed(0);
    } else { valor = 0; }
    if      (valor >= 1 && valor <= 17) { condicao = "Muito abaixo"; }
    else if (valor > 17 && valor <= 19) { condicao = "Abaixo do peso"; }
    else if (valor > 19 && valor <= 25) { condicao = "Peso Normal"; }
    else if (valor > 25 && valor <= 30) { condicao = "Acima do peso"; }
    else if (valor > 30 && valor <= 35) { condicao = "Obesidade Leve"; }
    else if (valor > 35 && valor <= 40) { condicao = "Obesidade Severa"; }
    else if (valor > 40) { condicao = "Obesidade Mórbida"; }
    else { condicao = "Erro"; }
    return {valor:valor,condicao:condicao};
  }
