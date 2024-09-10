const input1 = document.getElementById("smt1");
const input2 = document.getElementById("smt2");
const input3 = document.getElementById("years");

var value1, value2, value3;
const showInfo1 = document.getElementById("n1-infor");
const showInfo2 = document.getElementById("n2-infor");

const output1 = document.getElementById("score");
const output2 = document.getElementById("show-result");

const button = document.getElementById("reset");


function ok(value1, value2, value3, output1, output2) {
    if (value3 == 2) {
        display(output1, output2, (value1 + value2 * 2) / 3);
    } else if (value3 == 1) {
        display(output1, output2, value1)
    } else {
        display(output1, output2, false);
    }
}

function display(output1, output2, value) {
    if (value < 4 && value >= 0) {
        output1.value = value;
        output2.innerText = "Faid";
        output2.style.color = "red"
    } else if (value >= 4 && value <= 10) {
        output1.value = value;
        output2.innerText = "Pass";
        output2.style.color = "green"
    } else {
        output1.value = ""
        output2.innerText = "";
    }
}

input1.addEventListener("input", function() {
    value1 = parseFloat(input1.value)
    if (isNaN(value1) || value1 < 0 || value1 > 10) {
        showInfo1.innerText = "Invalid";
        showInfo1.style.color = "red";
        input1.style.backgroundColor = "lightcoral";
    } else {
        showInfo1.innerText = ""
        input1.style.backgroundColor = "lightgreen";
    }
})

input2.addEventListener("input", function() {
    value2 = parseFloat(input2.value)
    if (isNaN(value2) || value2 < 0 || value2 > 10) {
        showInfo2.innerText = "Invalid";
        showInfo2.style.color = "red";
        input2.style.backgroundColor = "lightcoral";
    } else {
        showInfo2.innerText = ""
        input2.style.backgroundColor = "lightgreen";
    }
})

input3.addEventListener("input", function() {
    value3 = years.value;
    if (parseInt(value3) >= 2) {
        input3.value = 2;
        input2.disabled = false;
    } else if (parseInt(value3) <= 1) {
        input3.value = 1;
        input2.disabled = true;
        showInfo2.innerText = "";
        input2.value = "";
        input2.style.backgroundColor = "white";
    }
})