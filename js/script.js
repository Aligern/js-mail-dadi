// email check 

// this variable is our button
const button = document.querySelector('.btn.btn-outline-dark');
console.log(button);


// here we explain the machine how to do the check
button.addEventListener('click', function(){
    // this variable indicates the false value of the email
    let exist = false;
    console.log(exist);
    console.log('Sto cercando la tua mail');
    // here we get the input from the user
    const email = document.getElementById('emailinput').value;
    console.log(email);
    // email array that we will use as database to do the check
    const mailDatabase = [
        "email-1@gmail.com",// 0
        "email-2@gmail.com",// 1
        "email-3@gmail.com",// 2
        "email-4@gmail.com" // 3
];
    console.log(mailDatabase.length);
    // this for cicle is for the array search
    for (let i = 0; i < mailDatabase.length; i++) {
        console.log(mailDatabase[i]);
        if (mailDatabase[i] === email) {
            exist = true;
    }   
}   
    // here we explain the machine what to do after the check
let output = document.getElementById('output');
console.log(output);
    if (exist) {
        output.innerHTML = 'Puoi accedere'
    }   else {
        output.innerHTML = 'Indirizzo mail non trovato'
    }
});


// dice game
// this function is needed to randomize
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

const button2 = document.querySelector('.btn.btn-outline-primary');
console.log(button2);
// here we explain the machine what to do after the click
button2.addEventListener('click', function(){
    // here we give img to our variable
    let diceImg = document.getElementById('dice-img');
    console.log(diceImg);
    // here we add
    let phrase = document.getElementById('phrase');
    console.log(phrase);
    // here we specify how the dices should work by attributing them the randomizer function
    let playerDice = getRndInteger(1,6);
    console.log(playerDice);
    let pcDice = getRndInteger(1,6);
    console.log(pcDice);
    if (playerDice === pcDice) {
        diceImg.innerHTML = `<img src="/img/${playerDice}.svg" alt=""><img src="/img/${pcDice}.svg" alt="">`;
        phrase.innerHTML =`Pareggio!`
        console.log('Hai pareggiato');
    } else if (playerDice < pcDice) {
        diceImg.innerHTML = `<img src="/img/${playerDice}.svg" alt=""><img src="/img/${pcDice}.svg" alt="">`;
        phrase.innerHTML =`Hai perso!`
        console.log('hai perso! =( ');
    } else {
        diceImg.innerHTML = `<img src="/img/${playerDice}.svg" alt=""><img src="/img/${pcDice}.svg" alt="">`;
        phrase.innerHTML =`Complimenti! Hai vinto!`
        console.log('hai vinto!');
    }
});
