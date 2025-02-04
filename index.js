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
