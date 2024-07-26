const tabs = document.querySelectorAll('.filter-page_tab');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        tabs.forEach((tab) => {
            tab.classList.remove('_active')
        });

        tab.classList.add('_active');
    })
})