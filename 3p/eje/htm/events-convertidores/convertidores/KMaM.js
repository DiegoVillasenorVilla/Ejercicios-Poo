function KaM() {
    let km = document.getElementById("convertidor").value
    let m = km/1.609
    document.getElementById("sal").innerHTML = m.toFixed(2) + " Millas"
}
function MaK() {
    let mil = document.getElementById("convertidor2").value
    let kil = mil*1.609
    document.getElementById("sal1").innerHTML = kil.toFixed(2) + " Km"
}
