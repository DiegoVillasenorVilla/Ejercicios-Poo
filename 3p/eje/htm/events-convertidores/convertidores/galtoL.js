function convertGL() {
    let a = document.getElementById("conG").value
    let gtol = a*3.785
    document.getElementById("sali").innerHTML = gtol.toFixed(2) + " Litros"
}
function convertLG() {
    let b = document.getElementById("conL").value
    let ltog = b/3.785
    document.getElementById("sali1").innerHTML = ltog.toFixed(2) + " Galones estadounidenses"
}