function generatePassword(length, includeLowercase, includesNumber, includeSymbols, includeUppercase){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars ="!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includesNumber ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    console.log(allowedChars);

    for(let i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }

    return password;
}

const input = document.querySelector('input');
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includesNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                includeLowercase, 
                                includeUppercase, 
                                includesNumber, 
                                includeSymbols);

console.log(`Generate password: ${password}`);

input.value = `${password}`;

function copyinput() {
     navigator.clipboard.writeText(input.value);
}