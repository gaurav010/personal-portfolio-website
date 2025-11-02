const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    const value = button.textContent;

    if(button.id === "clear") {
        display.value = "";
        return;
    }

    if(button.id === "equal") {
        try {
            display.value = eval(display.value);
        }
        catch{
            display.value = "Error";
            // console.error(bhai);
        }
        return;
    }

    display.value += value;
});