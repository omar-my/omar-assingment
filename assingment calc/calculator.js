function addby(){
    inputone = parseInt(calculator.inputone.value);
    inputtwo = parseInt(calculator.inputtwo.value);
    result= inputone+inputtwo;
    calculator.result.value=result;
}
function subtractby(){
    inputone = parseInt(calculator.inputone.value);
    inputtwo = parseInt(calculator.inputtwo.value);
    result= inputone-inputtwo;
    calculator.result.value=result;
}
function multipleby(){
    num1 = document.getElementById("inputone").value;
    num2 = document.getElementById("inputtwo").value;
    result = num1 * num2;
    document.getElementById("result").value = result;
}

function divideby(){
    inputone = parseInt(calculator.inputone.value);
    inputtwo = parseInt(calculator.inputtwo.value);
    result= inputone/inputtwo;
    calculator.result.value=result;
}
function diby(){
    inputone = parseInt(calculator.inputone.value);

    inputtwo = parseInt(calculator.inputtwo.value);
    result= inputone/inputtwo;
    calculator.result.value=result;
}

