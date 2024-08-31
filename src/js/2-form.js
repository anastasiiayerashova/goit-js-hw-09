document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap" rel="stylesheet">`);

const registerForm = document.querySelector(".feedback-form");

const div = document.createElement("div");
div.classList.add("container");
div.append(registerForm);

document.body.append(div);

const formData = {
    email: "",
    message: ""
};

const localStorageEmailKey = "form-email";
const localStorageMessageKey = "form-message";

const input = document.querySelector("input[name='email']");
const textarea = document.querySelector("textarea[name='message']");

input.value = localStorage.getItem(localStorageEmailKey) || "";
textarea.value = localStorage.getItem(localStorageMessageKey) || "";

formData.email = input.value.trim();
    formData.message = textarea.value.trim();

registerForm.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value;
    if (name === "email") {
        localStorage.setItem(localStorageEmailKey, formData.email);
    }
    else if (name === "message") {
        localStorage.setItem(localStorageMessageKey, formData.message);
    }

})

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(formData);
    localStorage.removeItem(localStorageEmailKey);
    localStorage.removeItem(localStorageMessageKey);
    registerForm.reset();
   form
})

