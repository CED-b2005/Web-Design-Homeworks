const ePN = document.getElementById("enterPName");
const ePQ = document.getElementById("enterPQuanl");
const ePP = document.getElementById("enterPPrice");
const ePD = document.getElementById("enterPDc");

const noti1 = document.getElementById("noti1")
const noti2 = document.getElementById("noti2")
const noti3 = document.getElementById("noti3")
const noti4 = document.getElementById("noti4")

const sell_but = document.getElementById("sell")
const cancel_but = document.getElementById("cancel")

const appear = document.getElementById("infoOutput");
const tab = document.getElementById("b-content");

let list = [
    [],
    [],
    [],
    [],
    [],
    []
];

let id = ["id", "pN", "q", "up", "d", "sT"];

function printNoti(object1, object2) {
    if (object1.value == "") {
        object2.innerHTML = "empty"
    } else {
        object2.innerHTML = null;
    }
}

function noti(object1, object2) {
    object1.addEventListener("mouseover", function() {
        printNoti(object1, object2)

        object1.addEventListener("mouseout", function() {
            printNoti(object1, object2)
        })

        object1.addEventListener("input", function() {
            printNoti(object1, object2)
        })
    })
}

function edit(object) {
    object.addEventListener("input", function() {
        if (object.value < 0) {
            object.value = 0;
        }
    })
}

function makeEmpty() {
    ePD.value = null;
    ePN.value = null;
    ePP.value = null;
    ePQ.value = null;

    noti1.innerHTML = null;
    noti2.innerHTML = null;
    noti3.innerHTML = null;
    noti4.innerHTML = null;
}

function sell() {
    if ((ePN.value != "" && ePN.value != null) && (ePD.value >= 0 && ePD.value != "") && (ePP.value >= 0 && ePP.value != "") && (ePQ.value >= 0 && ePQ.value != "")) {
        list[0].push(list[0].length + 1)
        list[1].push(ePN.value);
        list[2].push(ePQ.value);
        list[3].push(ePP.value);
        list[4].push(ePD.value);
        list[5].push(ePQ.value * ePP.value * (100 - ePD.value) / 100)
        makeEmpty();
        appear.style.display = "block"
        printTable();
    } else {
        console.log("Have empty")
    }
}

function cancel() {
    cancel_but.addEventListener("click", function() {
        makeEmpty();
    })
}

function pDiscountError() {
    ePD.addEventListener("input", function() {
        if (ePP.value != "" && ePP.value != null) {
            if (ePD.value < 0) {
                ePD.value = 0;
            } else if (ePD.value > 100) {
                ePD.value = 100;
            }
        } else {
            ePD.value = null
        }
    })
}

noti(ePN, noti1)
noti(ePQ, noti2)
edit(ePQ)
noti(ePP, noti3)
edit(ePP)
noti(ePD, noti4)
edit(ePD)
pDiscountError()

function printTable() {
    var createTr = document.createElement("tr")
    tab.appendChild(createTr)
    var i = list[0].length - 1;
    for (j = 0; j < id.length; j++) {
        var createTd = document.createElement('td');
        createTr.appendChild(createTd);
        createTd.className = id[j];
        createTd.textContent = list[j][i]
    }
}