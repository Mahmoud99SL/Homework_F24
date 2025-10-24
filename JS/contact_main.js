// Dark/Light Mode Toggle
document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// Form Validation
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form reload

    const messageInput = document.getElementById("userMessage");
    const formMessage = document.getElementById("formMessage");

    if (messageInput.value.trim() === "") {
        formMessage.textContent = "الرجاء إدخال رسالة";
        formMessage.classList.remove("text-success");
        formMessage.classList.add("text-danger");
        } 
    else {
        formMessage.textContent = "تم إرسال الرسالة بنجاح!";
        formMessage.classList.remove("text-danger");
        formMessage.classList.add("text-success");
        messageInput.value = ""; // clear input after success
        }
        });