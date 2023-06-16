

const form = document.querySelector('#newsletter-form');
const signin = document.querySelector('#signin');
const success = document.querySelector('#success');
const dismiss = document.querySelector('#dismiss');
const submittedEmail = document.querySelector('#submitted-email');

function updateMessage(str) {
    submittedEmail.textContent = str;
}

function switchContainer() {
    signin.classList.toggle("hidden");
    success.classList.toggle("hidden");
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
}

function showError() {
    const errorMsg = document.querySelector("#error");
    const input = document.querySelector("#email");
    errorMsg.classList.remove("hidden");
    input.classList.add("error");
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.querySelector("#email");
    const valid = checkEmail(email.value);
    if (valid) {
        updateMessage(email.value);
        switchContainer();
    } else {
        return showError();
    }
});

dismiss.addEventListener("click", () => {
    switchContainer();
    updateMessage("");
})