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

const key = "feedback-form-state";

const saveData = localStorage.getItem(key);

if (saveData) {
    const parseData = JSON.parse(saveData);
    formData.email = parseData.email || "";
  formData.message = parseData.message || "";
    registerForm.elements.email.value = formData.email;
    registerForm.elements.message.value = formData.message;
}

registerForm.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
     localStorage.setItem(key, JSON.stringify(formData));

})

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

  if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    registerForm.reset();
//  localStorage.removeItem(key);
    formData.email = "";
    formData.message = "";
})