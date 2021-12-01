let firstName, lastName, date, gender;
let firstNameInput = document.getElementById('firstName');
let lastNameInput = document.getElementById('lastName');
let dateInput = document.getElementById('date');
let form = document.getElementById('form');
let display = document.getElementById('display');

function genderValue(browser) {
    gender = browser.value;
}

function getValue() {
    firstName = firstNameInput.value;
    lastName = lastNameInput.value;
    date = dateInput.value;
    
}

form.addEventListener('submit', function() {
    event.preventDefault();
    getValue();
    display.innerText = 'First name: ' + firstName
    + '\nLast name: ' + lastName
    + '\nGender: ' + gender
    + '\nDOB: ' + date;
});