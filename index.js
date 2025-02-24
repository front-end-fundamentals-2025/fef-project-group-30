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
    const searchInput = document.getElementById("search-input");

    if (searchInput) {
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                if (searchInput.value.toLowerCase() === "women") {
                    window.location.href = "women.html";
                }
            }
        });
    } else {
        console.error("Search input element not found");
    }
});