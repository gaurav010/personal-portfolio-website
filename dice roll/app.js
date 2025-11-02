function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImages");
    const values =[];
    const images =[];

    for(let i=0; i < numOfDice; i++){
    const value = Math.floor(Math.random()*6) + 1;
    // console.log(value);
    values.push(value);
    images.push(`<img src ="images/${value}.png" alt="dice ${value}">`);
}
    
diceImage.classList.add("shake");

setTimeout(() => {
  diceImage.classList.remove("shake");
  diceImage.innerHTML = images.join('');
  diceResult.textContent = `Dice: ${values.join(', ')}`;
}, 600); 


    // diceResult.textContent = `dice: ${values.join(', ')}`;
    // diceImage.innerHTML = images.join('');

console.log(values)
}





