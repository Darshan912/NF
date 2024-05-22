
const Submit = document.getElementById("submit");


Submit.addEventListener("click", function () {

    const tw1 = document.getElementById("tw1").value;
    const skw = document.getElementById("skw").value;
    const avg = document.getElementById("avg").value;
    const net = document.getElementById("skoutputvalue");

    var num = skw - tw1;
    var num1 = num / avg;
    var res = num1 * 1000;
    var deci = (Math.round(res * 100) / 100).toFixed(2);
    net.innerHTML = deci;

    console.log("tw " + tw1);
    console.log("skw " + skw);
    console.log("avg " + avg);
    console.log("net " + deci);

}) 