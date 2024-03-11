// email check 
const button = document.querySelector('.btn.btn-outline-dark');
console.log(button)

button.addEventListener('click', function(){
    let exist = false;
    console.log(exist);
    console.log('Sto cercando la tua mail');
    const email = document.getElementById('emailinput').value;
    console.log(email);
    // email array 
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
let output = document.getElementById('output');
console.log(output);
    if (exist) {
        output.innerHTML = 'Puoi accedere'
    }   else {
        output.innerHTML = 'Indirizzo mail non trovato'
    }
});


// dice game
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    }