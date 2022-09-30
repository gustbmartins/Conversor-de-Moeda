function converterEmReal () {
    var valorDolar = document.getElementById("valor")
    var valorElemento = valorDolar.value
    
    var valorTransformadoDolar = parseFloat(valorElemento) * 5.24

    var valorConvertidoDolar = document.getElementById("valorConvertido")
    var valorFinal = "O valor em Real é R$ " + valorTransformadoDolar
    valorConvertidoDolar.innerHTML = valorFinal

}
function converterEmDolar () {
  var valorDolar = document.getElementById("valor")
    var valorElemento = valorDolar.value
    
    var valorTransformadoDolar = parseFloat(valorElemento) / 5.24
    var valorFixado = valorTransformadoDolar.toFixed(2)

    var valorConvertidoDolar = document.getElementById("valorConvertido")
    var valorFinal = "O valor em dolar é U$ " + valorFixado
    valorConvertidoDolar.innerHTML = valorFinal
  
}