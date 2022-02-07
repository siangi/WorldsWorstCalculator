"use strict";

function calculate(){
    let result;
    let firstVal = Number.parseFloat(document.querySelector("#firstnumber").value, 10);  
    let secondVal = Number.parseFloat(document.querySelector("#secondnumber").value, 10);
    let operation = document.querySelector("#operator").value;
    let doround = document.querySelector("#doround").checked;
    let roundVal;
    if (doround){
        roundVal = Number.parseInt(document.querySelector("#decimals").value, 10);
    }

    if (firstVal === NaN || secondVal === NaN || roundVal === NaN){
        console.error("only numbers can be calculated!");
        return;
    }

    switch (operation) {
        case "add":
            result = firstVal + secondVal;
            break;
        case "sub":
            result = firstVal - secondVal;
            break;
        case "mul":
            result = firstVal * secondVal;
            break;
        case "div":
            result = firstVal / secondVal;
            break;
    }

    if (doround){
        result = result.toFixed(roundVal);
    }
    
    document.querySelector("#firstnumber").value = result;

    let newNode = document.createElement("li");
    newNode.textContent = result;
    document.querySelector("#results").appendChild(newNode);
    newNode.scrollIntoView(false);
}

function clearResults(){
    let list = document.querySelector("#results");
    list.replaceChildren(...[])
}
