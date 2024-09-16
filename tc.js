// var Clock = document.getElementById("sub");
// Clock.addEventListener("click", function () {
//    var st = document.getElementById("st").value;
//    console.log(st)
//    var et = document.getElementById("et").value;
//    console.log(et)
// //    var total = document.getElementById("total"); 
// //    console.dir(total)  
//    var t = et-st;
//    var deci = (Math.round(t * 100) / 100).toFixed(2);
//    var la = document.getElementById("totaltvalue");
//    la.innerHTML= deci;
//    console.log(t)
//    console.log(deci)
// //    console.log(total)
// //    total.textContent = t;
//       console.log("hi")
//    }) 

var timeDiff = document.getElementById("subm");
timeDiff.addEventListener("click", function () {

      const starttime = document.getElementById("appt").value;
      let convertedTime = starttime.split(':').join('.');
      //let timeNumber = parseFloat(convertedTime);
      console.log(convertedTime); 
      const endtime = document.getElementById("ap").value;
      let convTime = endtime.split(':').join('.');
      //let timeNumber1 = parseFloat(convTime);
      console.log(convTime); 
      const res = convTime-convertedTime;
      //const res1 = res*60;
      for(var i=0;i<=res;i++){

      }
      
      console.log(res);
      var deci = (Math.round(res* 100) / 100).toFixed(2);  
      console.log("deci" + deci)
      let output = document.getElementById('output');
      output.innerHTML = deci;
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








