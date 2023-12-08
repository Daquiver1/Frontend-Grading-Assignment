const Faq = () => {
    return (
        <>
        <div class="Faq">
        <section class="faq-section">
            <h2>FAQ: Grade Reporting</h2>
            <div class="faq-item">
                <h3>How can I report a missing grade?</h3>
                <p>To report a missing grade, please use the form provided on this page and fill in the required details.</p>
            </div>

            <div class="faq-item">
                <h3>What information do I need to include when reporting a missing grade?</h3>
                <p>When reporting a missing grade, make sure to provide the course name, instructor name, expected grade, and an explanation of the issue.</p>
            </div>
        </section>
        <section class="contact-form">
            <h2>Contact Technical Support</h2>
            <form id="techSupportForm">
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required/>

                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="button" onclick="submitTechSupportForm()">Submit</button>
            </form>
            <div id="techSupportConfirmation"></div>
        </section>
    </div>
        </>
    );
}
 
export default Faq;