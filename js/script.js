const submitButton = document.querySelector("#submit");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const emailAddress = document.querySelector("#email");
const password = document.querySelector("#password");

const errorIcons = Array.from(document.querySelectorAll(".error-icon"));
// console.log(errorIcons);
const errorMsgs = Array.from(document.querySelectorAll(".error-message"));


submitButton.addEventListener("click", function (e) {
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

    } else if (fname.match(acceptedNames) && !lname.match(acceptedNames)) {
        firstName.style.border = "1px solid var(--border)";
        removeError(errorIcons, 0, errorMsgs, 0);

        e.preventDefault();
        lastName.style.border = "2px solid var(--accent)";
        addError(errorIcons, 1, errorMsgs, 1);

    } else if (lname.match(acceptedNames) && !email.match(acceptedEmail)) {
        lastName.style.border = "1px solid var(--border)";
        removeError(errorIcons, 1, errorMsgs, 1);

        e.preventDefault();
        emailAddress.style.border = "2px solid var(--accent)";
        addError(errorIcons, 2, errorMsgs, 2);

    } else if (email.match(acceptedEmail) && pword.length === 0) {
        emailAddress.style.border = "1px solid var(--border)";
        removeError(errorIcons, 2, errorMsgs, 2);

        e.preventDefault();
        password.style.border = "2px solid var(--accent)";
        addError(errorIcons, 3, errorMsgs, 3);

    } else {
        password.style.border = "1px solid var(--border)";

        errorIcons.forEach(() => this.classList.add("hidden"));
        errorMsgs.forEach(() => this.classList.add("hidden"));
    }
});


//// Functions to Add & Remove Errors /////
const addError = function (array1, index1, array2, index2) {
    array1[index1].classList.remove("hidden");
    array2[index2].classList.remove("hidden");
};

const removeError = function (array1, index1, array2, index2) {
    array1[index1].classList.add("hidden");
    array2[index2].classList.add("hidden");
};