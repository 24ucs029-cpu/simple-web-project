const button = document.getElementById("helloBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "Hello! Your website is working.";
});
