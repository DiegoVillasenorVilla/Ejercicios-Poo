function convertRG() {
    let F = document.getElementById("convertidor").value
    let rtog= (F*180)/Math.PI
    document.getElementById("sal").innerHTML = rtog.toFixed(2) + " Grados sexagesimales"
}
function convertGR() {
    let S = document.getElementById("convertidor2").value
    let gtor = (S*Math.PI)/180
    document.getElementById("sal1").innerHTML = gtor.toFixed(2) + " Radianes"
}