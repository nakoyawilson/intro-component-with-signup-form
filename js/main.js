const claimButton = document.querySelector(".claim");
const inputs = document.querySelectorAll("input");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errorMessages = document.querySelectorAll(".error-message");

const validateForm = () => {
  inputs.forEach((input) => {
    if (input.value === "") {
      input.nextElementSibling.style.display = "inline";
      input.nextElementSibling.nextElementSibling.style.display = "block";
      input.previousElementSibling.style.display = "none";
      input.style.border = "1px solid hsl(0, 100%, 74%)";
      input.style.color = "hsl(0, 100%, 74%)";
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
      input.style.border = "1px solid hsl(0, 100%, 74%)";
      input.style.color = "hsl(0, 100%, 74%)";
    } else {
      input.nextElementSibling.style.display = "none";
      input.nextElementSibling.nextElementSibling.style.display = "none";
      input.style.border = "1px solid hsla(246, 25%, 77%, 0.5)";
      input.style.color = "hsl(249, 10%, 26%)";
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

claimButton.addEventListener("click", (e) => {
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
