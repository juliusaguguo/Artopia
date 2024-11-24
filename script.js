const newsletter = document.getElementById("newsletter");
const newsletterBtn = document.getElementById("newsletterBtn");

newsletterBtn.addEventListener("click", () => {
  if (
    newsletter.value.includes("@") &&
    newsletter.value.includes("gmail.com")
  ) {
    newsletter.value = " ";
  } else {
    alert("Both '@' & '.com' are required");
  }
});

const footerEmailIcon = document.getElementById("footerEmailIcon");
const footerEmail = document.getElementById("footerEmail");

footerEmailIcon.addEventListener("click", () => {
  if (
    footerEmail.value.includes("@") &&
    footerEmail.value.includes("gmail.com")
  ) {
    footerEmail.value = " ";
  } else {
    alert("Both '@' & '.com' are required");
  }
});



 