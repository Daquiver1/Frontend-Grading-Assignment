
// eslint-disable-next-line no-unused-vars
function simulateAuthentication() {
    const studentId = document.getElementById("studentId").value;
    const pin = document.getElementById("pin").value;

    // Simulated authentication (replace with actual logic)
    if (studentId === "12345" && pin === "6789") {
        // Redirect to the Dashboard page after successful authentication
        window.location.href = "dashboard.html";
        return false; // Prevent form submission for this example
    } else {
        document.getElementById("error-message").innerText = "Invalid Student ID or PIN. Please try again.";
        return false; // Prevent form submission
    }
}