const quoteForm = document.getElementById("quoteForm");
const formStatus = document.getElementById("formStatus");
const submitButton = quoteForm?.querySelector(".quote-submit");

if (quoteForm && formStatus && submitButton) {
    quoteForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
        formStatus.textContent = "";
        formStatus.classList.remove("success", "error");

        try {
            const formData = new FormData(quoteForm);
            const customerName = formData.get("name") || "there";

            const response = await fetch(quoteForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed.");
            }

            quoteForm.reset();

            formStatus.innerHTML = `
                <div class="success-message">
                    <div class="success-icon">✓</div>

                    <h3>Thank you, ${customerName}! We'll take it from here.</h3>

                    <p class="success-lead">
                        Your quote request has been received successfully.
                    </p>

                    <p>
                        We’ll review your request and contact you as soon as
                        possible with pricing, scheduling, and availability.
                    </p>

                    <div class="success-contact">
                        <span>Need help sooner?</span>

                        <a href="tel:+17027064212">
                            Call or text (702) 706-4212
                        </a>
                    </div>

                    <p class="success-closing">
                        Thank you for choosing
                        <strong>Crowne Hauling & Delivery.</strong>
                        We appreciate the opportunity to earn your business.
                    </p>
                </div>
            `;

            formStatus.classList.add("success");

            formStatus.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } catch (error) {
            formStatus.textContent =
                "We could not send your request. Please try again or call or text (702) 706-4212.";

            formStatus.classList.add("error");
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Request My Free Quote";
        }
    });
}