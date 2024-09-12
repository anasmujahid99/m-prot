document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get the input fields
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    // Get the error message elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");

    // Initialize the error state
    let isValid = true;

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";

    // Validate Name field (check if it's empty)
    if (name.value.trim() === "") {
        nameError.textContent = "Name cannot be empty.";
        nameError.style.color = "red";
        isValid = false;
    }

    // Validate Email field (check if it's empty or invalid)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email cannot be empty.";
        emailError.style.color = "red";
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.color = "red";
        isValid = false;
    }

    // If the form is valid, you can submit it
    if (isValid) {
        document.getElementById("contactForm").submit();
    }
});


document.getElementById("toggle-btn").addEventListener("click", function () {
    let moreText = document.getElementById("more-text");
    let button = document.getElementById("toggle-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.textContent = "Show Less";
    } else {
        moreText.style.display = "none";
        button.textContent = "Show More";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Function to animate progress bars
    function animateProgressBars(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('progress');
                progressBars.forEach(bar => {
                    // Animate width from 0 to the value attribute
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.transition = 'width 1s ease-in-out';
                        bar.style.width = `${bar.getAttribute('value')}%`;
                    }, 100); // Delay to ensure initial width is set to 0%
                });
            }
        });
    }

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(animateProgressBars, {
        threshold: 0.5 // Trigger the callback when 50% of the target is visible
    });

    // Observe the Skills section
    const skillsSection = document.getElementById('Skills');
    observer.observe(skillsSection);
});


document.getElementById("menu-btn").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    const menuBtn = document.getElementById("menu-btn");

    navLinks.classList.toggle("active");
    menuBtn.textContent = navLinks.classList.contains("active") ? "Close" : "Menu";
});
