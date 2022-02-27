var tombol = document.getElementsByClassName("tombol");
var textInput = document.getElementById("textInput");
var reset = document.getElementById("reset")
var result = document.getElementById("jumlah")

var firstValue = 0;
var currentOperator = "";

result.addEventListener("click", function () {
    let currentValue = textInput.value;
    let resultValue = 0;

    if (currentOperator == "+") {
        resultValue = parseInt(firstValue) + parseInt(currentValue);
    }

    if (currentOperator == "-") {
        resultValue = parseInt(firstValue) - parseInt(currentValue);
    }

    if (currentOperator == "x") {
        resultValue = parseInt(firstValue) * parseInt(currentValue);
    }

    if (currentOperator == "/") {
        resultValue = parseInt(firstValue) / parseInt(currentValue);
    }


    textInput.value = resultValue;
})


reset.addEventListener("click", function () {
    textInput.value = 0;
})

var handleTombol = function () {
    let currentValue = textInput.value;
    let nilai = this.innerText;
    let operator = ["+", "-", "/", "x"];
    if (operator.includes(nilai)) {
        firstValue = currentValue;
        textInput.value = 0;
        currentOperator = nilai;
    } else {
        if (currentValue !== "0") {
            textInput.value = currentValue + nilai;
        } else {
            textInput.value = nilai;
        }
    }
};

Array.from(tombol).forEach(function (element) {
    element.addEventListener("click", handleTombol);
});