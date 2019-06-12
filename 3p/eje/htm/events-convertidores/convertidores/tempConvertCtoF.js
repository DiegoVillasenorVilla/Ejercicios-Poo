//
// tConvertir grados celsius a farenheint
//
function convertir() {
    let tinC = document.getElementById("temperature").value
    let con = (tinC*9/5)+32
    document.getElementById("salida").innerHTML = con + " grados F"
}
