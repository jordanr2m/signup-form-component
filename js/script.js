const submitButton = document.querySelector("#submit");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const emailAddress = document.querySelector("#email");
const password = document.querySelector("#password");

const errorIcons = Array.from(document.querySelectorAll(".error-icon"));
const errorMsgs = Array.from(document.querySelectorAll(".error-message"));

// Function to Add Errors
function addError (array1, index1, array2, index2) {
    array1[index1].classList.remove("hidden");
    array2[index2].classList.remove("hidden");
};

function validateForm (e) {
    const acceptedNames = /^[a-zA-Z ]{2,30}$/;
    const fname = firstName.value;
    const lname = lastName.value;

    const acceptedEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const email = emailAddress.value;

    // const acceptedPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const pword = password.value;

    if (!fname.match(acceptedNames)) {
        e.preventDefault();
        firstName.style.border = "2px solid var(--accent)";
        addError(errorIcons, 0, errorMsgs, 0);
    } 
    
    if (!lname.match(acceptedNames)) {
        e.preventDefault();
        lastName.style.border = "2px solid var(--accent)";
        addError(errorIcons, 1, errorMsgs, 1);
    } 
    
    if (!email.match(acceptedEmail)) {
        e.preventDefault();
        emailAddress.style.border = "2px solid var(--accent)";
        addError(errorIcons, 2, errorMsgs, 2);
    } 
    
    if (pword.length < 1) {
        e.preventDefault();
        password.style.border = "2px solid var(--accent)";
        addError(errorIcons, 3, errorMsgs, 3);
    } 

    // What to do if a form is submitted blank (no icons show)
    if (!fname.match(acceptedNames) && !lname.match(acceptedNames) && !email.match(acceptedEmail) && pword.length < 1) {
        errorIcons.forEach(icon => icon.classList.add('hidden'));
    }
}

submitButton.addEventListener("click", validateForm);