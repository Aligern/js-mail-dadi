// email check 
const button = document.querySelector('btn btn-outline-dark');
console.log(button)

button.addEventListener('click', function()){
    console.log('Sto cercando la tua mail');
    const email = parseInt(document.getElementById('emailinput').value);
    console.log(email);
    // email array 
    const mailDatabase = [
        "email-1@gmail.com",
        "email-2@gmail.com",
        "email-3@gmail.com",
        "email-4@gmail.com"
];
    console.log(mailDatabase);
    for (let i = 0; i < mailDatabase.length; i++) {
        console.log(i);
    }
};

