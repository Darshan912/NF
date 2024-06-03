var t = document.getElementById("t");
console.log(t);
t.addEventListener("onmouseover",function(){
 window.alert("Hi");
 console.log("hi");
})

const submit  = document.getElementById('submit');
submit.addEventListener("click", function(){
const bulk  = document.getElementById('bulk').value;
const Avarge  = document.getElementById('Avarge').value;
const fw  = document.getElementById('fw').value;
const pc  = document.getElementById('pc').value;
const submit  = document.getElementById('submit').value;
const outputvalue = document.getElementById('outputvalue');
let A = bulk*1000;
let B = Avarge-fw;
let C = A/B;
let Ans = pc/C*100;
let Deci = (Math.round(Ans * 100) / 100).toFixed(2);
outputvalue.innerHTML = Deci;
    console.log("hi");
    console.log("A = " + A);
    console.log("B = "+ B);
    console.log("C = "+ C);
    console.log("D = "+ pc);

    console.log(Ans);

})