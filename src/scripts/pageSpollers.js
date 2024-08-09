import {_slideToggle} from "./modules/slider.js";

const titleQuestionButtons = document.querySelectorAll('.questions-page_row');
let isClick = true;

titleQuestionButtons.forEach((titleQuestionButton) => {
    titleQuestionButton.addEventListener('click', () => {
        const textBlock = titleQuestionButton.nextElementSibling;
        const sliderBtn = titleQuestionButton.querySelector('.questions-page_btn');
        const windowWidth = window.innerWidth;

        _slideToggle(textBlock);

        if (isClick) {
            if (windowWidth < 480) {
                sliderBtn.style.background = '#6C5FBC url("../images/menu/minus.png") center /15px no-repeat';
                isClick = false;
            } else {
                sliderBtn.style.background = '#6C5FBC url("../images/menu/minus.png") center no-repeat';
                isClick = false;
            }
        } else {
            if (windowWidth < 480) {
                sliderBtn.style.background = '#6C5FBC url("../images/menu/plus.png") center /15px no-repeat';
                isClick = true;
            } else {
                sliderBtn.style.background = '#6C5FBC url("../images/menu/plus.png") center no-repeat';
                isClick = true;
            }
        }
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

                _slideToggle(featuresBlock, 'grid');

                if (firstClock) {
                    title.classList.add('_active');
                    firstClock = false;
                } else {
                    title.classList.remove('_active');
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





