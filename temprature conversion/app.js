const textbox = document.getElementById("textbox");
const toFahernhight = document.getElementById("toFahernhight");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;

function convert() {
    if(toFahernhight.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelcius.checked){
       temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }
}
//yeah!!!!