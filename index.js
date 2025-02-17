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
