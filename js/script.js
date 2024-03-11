// email check 
const button = document.querySelector('btn btn-outline-dark');
console.log(button)

button.addEventListener('click', function(){
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
    for (let i = 0; i < mailDatabase.length; i++) {
        console.log(mailDatabase[i]);
        let mailAddress = mailDatabase[i];
        console.log(mailAddress);
    }
}
);
