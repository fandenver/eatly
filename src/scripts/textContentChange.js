const textContentBlock = document.querySelector('.contacts-page_title');
const contactsTextBlock = document.querySelector('.contacts-page_block');

if (contactsTextBlock) {
    window.addEventListener("load", () => {
        const windowWidth = window.innerWidth;
        textContentBlock.textContent = windowWidth < 768 ? 'Contact Us' : 'Just Contact';
    });

    window.addEventListener("resize", () => {
        const windowWidth = window.innerWidth;
        textContentBlock.textContent = windowWidth < 992 ? 'Contact Us' : 'Just Contact';
    });
}