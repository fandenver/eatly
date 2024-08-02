const hiddenColumns = document.querySelectorAll('.tariff-page_column._column-hidden');
const contestsColumns = document.querySelectorAll('.tariff-page_column._column-contests');
const firstColumns = document.querySelectorAll('.tariff-page_column._first-column');
const secondColumns = document.querySelectorAll('.tariff-page_column._second-column');
const hiddenItems = document.querySelectorAll('.tariff-page_item._item-hidden');
const hiddenTitle = document.querySelector('.tariff-page_title._title-hidden');
const orderTitles = document.querySelectorAll('.tariff-page_title._title-order');
const orderPrices = document.querySelectorAll('.tariff-page_price._price-order');
const orderBodes = document.querySelectorAll('.tariff-page_body._body-order');
const orderFooters = document.querySelectorAll('.tariff-page_footer._footer-order');
const orderDescriptions = document.querySelectorAll('.tariff-page_description._description-order');
const hiddenDescription = document.querySelector('.tariff-page_description._description-hidden');
const windowWidth = window.innerWidth;

hiddenColumns.forEach((hiddenColumn) => {

    if(windowWidth < 992) {
        hiddenColumn.classList.add('_column-hidden');
        hiddenColumn.classList.add('_column-contests');
        hiddenTitle.classList.add('_title-hidden');
        hiddenDescription.classList.add('_description-hidden');

        console.log('123')
    } else {
        hiddenColumn.classList.remove('_column-hidden');
        hiddenColumn.classList.remove('_column-contests');
        hiddenTitle.classList.remove('_title-hidden');
        hiddenDescription.classList.remove('_description-hidden');
        console.log('321')
    }
})

hiddenItems.forEach((hiddenItem) => {

    if(windowWidth < 992) {
        hiddenItem.classList.add('_item-hidden');
    } else {
        hiddenItem.classList.remove('_item-hidden');
    }
})

orderTitles.forEach((orderTitle) => {

    if(windowWidth < 992) {
        orderTitle.classList.add('_title-order');
    } else {
        orderTitle.classList.remove('_title-order');
    }
})

orderDescriptions.forEach((orderDescription) => {

    if(windowWidth < 992) {
        orderDescription.classList.add('_description-order');
    } else {
        orderDescription.classList.remove('_description-order');
    }
})

orderPrices.forEach((orderPrice) => {

    if(windowWidth < 992) {
        orderPrice.classList.add('_price-order');
    } else {
        orderPrice.classList.remove('_price-order');
    }
})

orderBodes.forEach((orderBody) => {

    if(windowWidth < 992) {
        orderBody.classList.add('_body-order');
    } else {
        orderBody.classList.remove('_body-order');
    }
})

orderFooters.forEach((orderFooter) => {

    if(windowWidth < 992) {
        orderFooter.classList.add('_footer-order');
    } else {
        orderFooter.classList.remove('_footer-order');
    }
})

contestsColumns.forEach((contestsColumn) => {

    if(windowWidth < 992) {
        contestsColumn.classList.add('_column-contests');
    } else {
        contestsColumn.classList.remove('_column-contests');
    }
})

firstColumns.forEach((firstColumn) => {

    if(windowWidth < 992) {
        firstColumn.classList.add('_first-column');
    } else {
        firstColumn.classList.remove('_first-column');
    }
})

secondColumns.forEach((secondColumn) => {

    if(windowWidth < 992) {
        secondColumn.classList.add('_second-column');
    } else {
        secondColumn.classList.remove('_second-column');
    }
})