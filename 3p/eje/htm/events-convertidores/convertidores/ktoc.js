function KtoC() {
    let k = document.getElementById("convertidorKtoC").value
    let kc = k-273.15
    document.getElementById("fuera").innerHTML = kc.toFixed(2) + "  grados Celsius"
}
function CtoK() {
    let c = document.getElementById("convertidorCtoK").value
    let cK = c+273.15
    document.getElementById("fuera2").innerHTML = cK.toFixed(2) + " grados Kelvin"
}
