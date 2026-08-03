const quoteForm = document.getElementById("quoteForm");
const formStatus = document.getElementById("formStatus");

if (quoteForm && formStatus) {
    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        formStatus.textContent =
            "The form design is working. Online submissions will be connected before launch.";
    });
}