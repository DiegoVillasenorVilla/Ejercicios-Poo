//
// this may be a class, object, module, or function
//
function convert() {
    let t = document.getElementById("temp").value
    let o = (t-32)/1.8
    document.getElementById("out").innerHTML = o.toFixed(2) + " degrees F"
}
