let inputField = document.querySelector('.sale-get-page_input > input');

window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 992) {
        inputField.placeholder = 'Email Address';
    }
});
