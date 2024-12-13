
/* === THIS IS THE VALIDATION FOR THE INDIVIDUAL ACCOUNT CREATION AND FOR THE BUSINESS ACCOUNT === */
document.getElementById("register").addEventListener("click", function (event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!fullname) {
    alert("please enter your full name.");
    return;
  }
  if (!email) {
    alert("please enter a valid email");
    return;
  }
  if (!passwordRegex.test(password)) {
    alert(
      "password must be at least 6 characters long and include an uppercase letter, a lowercase letter, a number, and a symbol"
    );
    return;
  }

  window.location.href = "completeProfileForBusiness.html";
});




/* == TO SHOW THE INPUT VALUE OF THE PASSWORD  == */
document.getElementById("show").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    this.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    this.textContent = "Show";
  }
});
