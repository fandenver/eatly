import {_slideToggle} from "./slider.js";

// todo: при открытии вкладки изменить знак + в кнопке на - как на макете
const titleQuestionButtons = document.querySelectorAll('.questions-page_row');

titleQuestionButtons.forEach((titleQuestionButton) => {
    titleQuestionButton.addEventListener('click', () => {
        const textBlock = titleQuestionButton.nextElementSibling;

        _slideToggle(textBlock);
    })
})

const featuresTitles = document.querySelectorAll('.tariff-page_features');
const windowWidth = window.innerWidth;

if (windowWidth < 992) {
    featuresTitles.forEach((title) => {
        title.addEventListener('click', () => {
            const featuresBlock = title.nextElementSibling;

            _slideToggle(featuresBlock);
            title.classList.toggle('_active');
            featuresBlock.classList.toggle('_active');
        })
    })
}




