const priceSlider = document.querySelector('.form-filter_slider');

noUiSlider.create(priceSlider, {
    start: 25,
    connect: ['lower', 'upper'],
    range: {
        'min': [0],
        'max': [1000]
    }
});