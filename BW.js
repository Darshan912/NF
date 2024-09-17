

const Submit = document.getElementById("submit");

Submit.addEventListener("click", function () {

    const tw = document.getElementById("TW").value;
    const unit = document.getElementById("unit").value;

    const res = document.getElementById("bwoutputvalue");

    console.log(tw);
    console.log(unit);

    let add = +tw+9;
    let mul = add * unit;
    let cal = mul / 1000;
    res.innerHTML = cal;

    console.log(add)
    console.log(cal);
    

}) 