const inputField = document.querySelector('.sale-get-page_input > input');
const bannerContainer = document.querySelector('.sale-get-page');

if (bannerContainer) {
    window.addEventListener("load", () => {
        const windowWidth = window.innerWidth;
        inputField.placeholder = windowWidth < 992 ? 'Email Address' : 'Enter Your Email Address';
    });

    window.addEventListener("resize", () => {
        const windowWidth = window.innerWidth;
        inputField.placeholder = windowWidth < 992 ? 'Email Address' : 'Enter Your Email Address';
    });
}
