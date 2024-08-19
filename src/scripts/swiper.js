import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
        }
    }
}

if (document.querySelector('.customer-page_body')) {
    let productSlider = new Swiper('.customer-page_slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 2,
        spaceBetween: 40,
        speed: 800,
        loop: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                scrollbar: {
                    el: '.customer-page_scroll',
                    draggable: false
                },
            },
            992: {
                slidesPerView: 2,
                scrollbar: {
                    el: '.customer-page_scroll',
                    draggable: true
                },
            },
        }
    });
}

if (document.querySelector('.filter-page_sale-container')) {
    let bannerSlider = new Swiper('._sale-get-page-slider', {
        observer: true,
        observeParents: true,
        spaceBetween: 55,
        slidesPerView: 1,
        speed: 800,
        loop: false,
        pagination: {
            el: '.filter-page_dots',
            clickable: true,
            dynamicBullets: true,
        }
    });
}