// dropdown content
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('mouseenter', () => {
        let dropdownContent = item.querySelector('.dropdown-content');
        dropdownContent.style.height = dropdownContent.scrollHeight + 'px'; 
    });

    item.addEventListener('mouseleave', () => {
        let dropdownContent = item.querySelector('.dropdown-content');
        dropdownContent.style.height = '0';
    });
});

// hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const leftHamburger = document.getElementById('left-hamburger');
    const rightHamburger = document.getElementById('right-hamburger');
    const mainNav = document.querySelector('.main-nav');

    leftHamburger.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });

    rightHamburger.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });
});


// subscribe box
const subscribeBtn = document.querySelector(".subscribe-btn");
const box = document.getElementById("subscribe-box");
const closeBtn = document.getElementById("close-btn");

subscribeBtn.addEventListener("click", function () {
    box.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    box.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === box) {
        box.style.display = "none";
    }
});


// clothing tab
function openTab(evt, tabName) {
    var i, tabcontent, tabbtn;

    // hide information of all tabs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // remove active of all tab buttons
    tabbtn = document.getElementsByClassName("tabbtn");
    for (i = 0; i < tabbtn.length; i++) {
        tabbtn[i].className = tabbtn[i].className.replace(" active", "");
    }

    // display the current tab, and set the acitve tab button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// search input
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input") || document.getElementById("searchInput"); // 兼容不同 id

    if (searchInput) {
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                handleSearch(searchInput.value.trim().toLowerCase());
            }
        });

        searchInput.addEventListener("input", function (event) {
            handleSearch(event.target.value.trim().toLowerCase());
        });
    } else {
        console.error("Search input element not found. Please check the input field ID in your HTML.");
    }
});
function handleSearch(value) {
    if (value === "women") {
        window.location.href = "women.html";
    } else if (value === "men") {
        window.location.href = "Men.html";  
    } else if (value === "kid") {
        window.location.href = "Kid.html";
    } else if (value === "home") {
        window.location.href = "home.html";
    } else if (value === "sell") {
        window.location.href = "sell.html";
    } else if (value === "offline") {
        window.location.href = "sell2.html";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    // Register form
    const registerForm = document.getElementById("register-form");
    const registerMessage = document.getElementById("register");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        // Get the form data
        const firstName = document.getElementById('register-first-name').value;
        const lastName = document.getElementById("register-last-name").value;
        const email = document.getElementById("register-email").value.toLowerCase(); // Convert to lowercase
        const password = document.getElementById("register-password").value;

        // Save to local storage
        const userData = {
            fullName: `${firstName} ${lastName}`,
            email: email,
            password: password
        };

        localStorage.setItem("userData", JSON.stringify(userData));

        // Show success message
        registerMessage.textContent = "Welcome to LOOPSTYLE!";

        // Clear the form
        registerForm.reset();
    });

    // Sign in form
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        // Get the form data
        const email = document.getElementById("login-email").value.toLowerCase(); // Convert to lowercase
        const password = document.getElementById("login-password").value;

        // Get the data from local storage
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            // Check if the email and password match
            if (userData.email === email && userData.password === password) {
                // Sign in success, redirect to the user page
                window.location.href = "account2.html";
            } else {
                loginMessage.textContent = "Invalid email or password";
                loginMessage.style.color = "red";
            }
        } else {
            loginMessage.textContent = "User not found";
            loginMessage.style.color = "red";
        }

        // Clear the form
        loginForm.reset();
    });
});

// payment confirmation
document.addEventListener('DOMContentLoaded', () => {
    // get "proceed to checkout" button
    const checkoutButton = document.querySelector('.checkout-button');

    // add event listener to the button
    if (checkoutButton) {
        checkoutButton.addEventListener('click', (e) => {
            e.preventDefault(); // prevent form submission
            // direct to payment page
            window.location.href = 'pay.html';
        });
    }
});

// about us
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade");

    function CheckIfInView() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("show");
            }
    });
}

    window.addEventListener("scroll", CheckIfInView);
    CheckIfInView();
});
