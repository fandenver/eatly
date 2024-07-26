const categories = document.querySelectorAll('.form-filter_item');

categories.forEach((category) => {
    category.addEventListener('click', () => {

        const backgroundColor = window.getComputedStyle(category).backgroundColor;
        const borderColor = backgroundColor.slice(0, backgroundColor.length - 6) + ')';

        categories.forEach((category) => {
            category.classList.remove('_active');
            category.style.border = '0';
        })

        category.classList.add('_active');
        category.style.border = `3px solid ${borderColor}`;
    });
});