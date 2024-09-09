// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Form validation (basic)
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Display the submitted information in an alert or send to server
    alert(`Thank you, ${name}! Your message has been received.`);
    
    // Clear form fields
    document.getElementById('contactForm').reset();
});
