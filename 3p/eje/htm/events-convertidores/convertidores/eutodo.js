function convert() {
    let c = document.getElementById("convertidor").value
    let etou = c*1.13
    document.getElementById("sal").innerHTML = etou.toFixed(2) + " Dolares estadounidenses"
}
function convert2() {
    let d = document.getElementById("convertidor2").value
    let utoe = d*0.89
    document.getElementById("sal1").innerHTML = utoe.toFixed(2) + " Euros"
}
