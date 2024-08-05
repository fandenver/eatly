import {_slideToggle} from "./modules/slider.js";

// todo: при открытии вкладки изменить знак + в кнопке на - как на макете
const titleQuestionButtons = document.querySelectorAll('.questions-page_row');

titleQuestionButtons.forEach((titleQuestionButton) => {
    titleQuestionButton.addEventListener('click', () => {
        const textBlock = titleQuestionButton.nextElementSibling;

        _slideToggle(textBlock);
    })
})

const featuresTitles = document.querySelectorAll('.tariff-page_features');

function spoller() {
    const windowWidth = window.innerWidth;
    let firstClock = true;

    if (windowWidth < 992) {
        featuresTitles.forEach((title) => {
            title.addEventListener('click', () => {
                const featuresBlock = title.nextElementSibling;

                _slideToggle(featuresBlock);

                if (firstClock) {
                    title.classList.add('_active');
                    featuresBlock.classList.add('_active');
                    firstClock = false;
                } else {
                    title.classList.remove('_active');
                    featuresBlock.classList.remove('_active');
                    firstClock = true;
                }
            })
        })
    }
}

window.addEventListener('load', () => {
    spoller();
});

window.addEventListener('resize', () => {
    spoller();
});





