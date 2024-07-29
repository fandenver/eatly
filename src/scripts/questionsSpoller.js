import {_slideToggle} from "./slider.js";

// todo: при открытии вкладки изменить знак + в кнопке на - как на макете
const titleQuestionButtons = document.querySelectorAll('.questions-page_row');

titleQuestionButtons.forEach((titleQuestionButton) => {
    titleQuestionButton.addEventListener('click',  ()=> {
        const textBlock = titleQuestionButton.nextElementSibling;

        _slideToggle(textBlock);
    })
})


