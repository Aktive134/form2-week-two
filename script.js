const formDiv = document.getElementById("formed");
const username = document.getElementById("name");
const email = document.getElementById("email");
const token = document.getElementById("token");
const promptDiv = document.getElementById("promptDiv");
const promptInp = document.getElementById("promptInp");
const checkBox = document.getElementById("checkBox");

formDiv.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const tokenVal = token.value.trim();
  // const checkBox = checkBox.value;

  if (usernameVal === "") {
    //show error
    username.style.borderColor = "red";
    username.style.borderWidth = "4px";
    email.style.borderColor = "red";
    email.style.borderWidth = "4px";
    token.style.borderWidth = "4px";
    token.style.borderColor = "red";
    promptInp.value = "Name must be filled!!!";

    //add error class
  } else if (emailVal === "") {
    username.style.borderColor = "green";
    username.style.borderWidth = "4px";
    email.style.borderColor = "red";
    email.style.borderWidth = "4px";
    token.style.borderWidth = "4px";
    token.style.borderColor = "red";
    promptInp.value = "Email must be filled!!!";
  } else if (tokenVal === "") {
    username.style.borderColor = "green";
    username.style.borderWidth = "4px";
    email.style.borderColor = "green";
    email.style.borderWidth = "4px";
    token.style.borderWidth = "4px";
    token.style.borderColor = "red";
    promptInp.value = "Input activation code!!!";
  } else if (!checkBox.checked) {
    promptInp.value = "Agree to the privacy policy";
  } else {
    username.style.borderColor = "green";
    username.style.borderWidth = "4px";
    email.style.borderColor = "green";
    email.style.borderWidth = "4px";
    token.style.borderWidth = "4px";
    token.style.borderColor = "green";
    promptInp.value = "";
    console.log("Name:", usernameVal);
    console.log("email:", emailVal);
    console.log("token:", tokenVal);
  }
  // } else if (tokenVal ==="") {
  //   username.style.borderColor = "green";
  //   username.style.borderWidth = "4px";
  //   email.style.borderColor = "green";
  //   email.style.borderWidth = "4px";
  //   token.style.borderWidth = "4px";
  //   token.style.borderColor = "red";
  //   promptInp.value = "Input a valid activation code!!!";
}
