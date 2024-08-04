const hiddenColumns = document.querySelectorAll('.tariff-page_column._column-hidden');
const contestsColumns = document.querySelectorAll('.tariff-page_column._column-contests');
const hiddenItems = document.querySelectorAll('.tariff-page_item._item-hidden');
const orderTitles = document.querySelectorAll('.tariff-page_title._title-order');
const orderPrices = document.querySelectorAll('.tariff-page_price._price-order');
const orderBodes = document.querySelectorAll('.tariff-page_body._body-order');
const orderFooters = document.querySelectorAll('.tariff-page_footer._footer-order');
const orderDescriptions = document.querySelectorAll('.tariff-page_description._description-order');
const hiddenTitle = document.querySelector('.tariff-page_title._title-hidden');
const hiddenDescription = document.querySelector('.tariff-page_description._description-hidden');
const firstColumn = document.querySelector('.tariff-page_column._first-column');
const secondColumn = document.querySelector('.tariff-page_column._second-column');

changeClass = () => {
    const windowWidth = window.innerWidth;
    const isSmallScreen = windowWidth < 992;

    function toggleClass(elements, className, condition) {
        elements.forEach((element) => {
            condition ?
                element.classList.add(className) :
                element.classList.remove(className);
        });
    }

    toggleClass(hiddenColumns, '_column-hidden', isSmallScreen);
    toggleClass(contestsColumns, '_column-contests', isSmallScreen);
    toggleClass(hiddenItems, '_item-hidden', isSmallScreen);
    toggleClass(orderTitles, '_title-order', isSmallScreen);
    toggleClass(orderPrices, '_price-order', isSmallScreen);
    toggleClass(orderBodes, '_body-order', isSmallScreen);
    toggleClass(orderFooters, '_footer-order', isSmallScreen);
    toggleClass(orderDescriptions, '_description-order', isSmallScreen);

    if (isSmallScreen) {
        hiddenTitle.classList.add('_title-hidden');
        hiddenDescription.classList.add('_description-hidden');
        firstColumn.classList.add('_first-column');
        secondColumn.classList.add('_second-column');
    } else {
        hiddenTitle.classList.remove('_title-hidden');
        hiddenDescription.classList.remove('_description-hidden');
        firstColumn.classList.remove('_first-column');
        secondColumn.classList.remove('_second-column');
    }
}

window.addEventListener('load', () => {
    changeClass();
});

window.addEventListener('resize', () => {
    changeClass();
});
