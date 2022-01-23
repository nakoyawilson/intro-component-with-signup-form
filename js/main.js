const claimForm = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errorMessages = document.querySelectorAll(".error-message");

const validateForm = () => {
  inputs.forEach((input) => {
    const errorID = input.nextElementSibling.nextElementSibling.id;
    if (input.value === "") {
      input.nextElementSibling.style.display = "inline";
      input.nextElementSibling.nextElementSibling.style.display = "block";
      input.previousElementSibling.style.display = "none";
      input.classList.add("display-error");
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedBy", errorID);
      if (input.type === "email") {
        input.nextElementSibling.nextElementSibling.innerHTML =
          "Email cannot be empty";
      }
    } else if (input.type === "email" && !input.value.match(emailRegex)) {
      input.nextElementSibling.style.display = "inline";
      input.nextElementSibling.nextElementSibling.style.display = "block";
      input.nextElementSibling.nextElementSibling.innerHTML =
        "Looks like this is not an email";
      input.previousElementSibling.style.display = "none";
      input.classList.add("display-error");
    } else {
      input.nextElementSibling.style.display = "none";
      input.nextElementSibling.nextElementSibling.style.display = "none";
      input.classList.remove("display-error");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedBy");
    }
  });
};

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.previousElementSibling.style.display = "none";
  });
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value !== "") {
      input.previousElementSibling.style.display = "none";
      input.style.color = "hsl(249, 10%, 26%)";
    } else {
      input.previousElementSibling.style.display = "block";
    }
  });
});

claimForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  let errorDisplayed = false;
  errorMessages.forEach((errorMessage) => {
    if (errorMessage.style.display === "block") {
      errorDisplayed = true;
    }
  });
  if (errorDisplayed === false) {
    inputs.forEach((input) => {
      input.value = "";
      input.previousElementSibling.style.display = "block";
    });
  }
});
