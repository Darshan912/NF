var Clock = document.getElementById("sub");
Clock.addEventListener("click", function () {
   var st = document.getElementById("st").value;
   console.log(st)
   var et = document.getElementById("et").value;
   console.log(et)
//    var total = document.getElementById("total"); 
//    console.dir(total)  
   var t = et-st;
   var deci = (Math.round(t * 100) / 100).toFixed(2);
   var la = document.getElementById("totaltvalue");
   la.innerHTML= t;
   console.log(t)
//    console.log(total)
//    total.textContent = t;
}) 

var Diff = document.getElementById("submit");
Diff.addEventListener("click", function () {
    console.log("hi");
    var time = document.getElementById("fname").value;
    let h = time * 100 / 60;
    var deci = (Math.round(h * 100) / 100).toFixed(2);
    var p = document.createElement("p");
    var t = document.createTextNode(deci);
    p.appendChild(t);
   // document.getElementById("div").appendChild(p);      
    document.getElementById("outputvalue").innerHTML=deci;
    console.log(h);
    console.log(deci);
})