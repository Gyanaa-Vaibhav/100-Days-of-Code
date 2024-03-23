var in1 = document.getElementById("userWeight");
var in2 = document.getElementById("userHeight");



var btn1 = document.getElementById("button1");

var output = document.getElementById("ans");

function record() {

    if (in1.value == "" || in2.value == ""){
        alert("Please Enter a Value")
    }

    const a = (in1.value / ((in2.value * in2.value)/10000)).toFixed(2);

    if (a < 18.9) {
        output.innerHTML = 'UnderWeight : ' + a;
    } else if (a >= 18.9 && a <= 24.9) {
        output.innerHTML = "Normal Weight : " + a;
    } else {
        output.innerHTML = "Over Weight : " + a;
    }




}

btn1.addEventListener("click", record);