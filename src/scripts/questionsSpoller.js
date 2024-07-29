import {_slideToggle} from "./slider.js";

const titleQuestionButtons = document.querySelectorAll('.questions-page_row');

titleQuestionButtons.forEach((titleQuestionButton) => {
    titleQuestionButton.addEventListener('click',  ()=> {
        const textBlock = titleQuestionButton.nextElementSibling;

        _slideToggle(textBlock);
    })
})


