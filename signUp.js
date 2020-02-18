function sendMail(contactForm) {
    console.log("Tyring to do an email")
        emailjs.send("gmail", "test", {
        "subscribe_request": contactForm.projectsummary.value,
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value
    })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
            );
 return false; 
}