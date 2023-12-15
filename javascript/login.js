function authenticateUser() {
    var studentId = document.getElementById('studentId').value;
    var password = document.getElementById('password').value;

    // Check if the credentials are correct (for demonstration purposes)
    if (studentId === '11283519' && password === 'bigbang') {
        document.getElementById('loginForm').submit();

       
    } else {
        alert('Invalid username or password. Please try again.');
    
    }
}
