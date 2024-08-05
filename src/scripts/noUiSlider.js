const priceSlider = document.querySelector('.form-filter_slider');

if(priceSlider) {
    noUiSlider.create(priceSlider, {
        start: 0,
        connect: ['lower', 'upper'],
        range: {
            'min': [0],
            'max': [1000]
        }
    });
}