document.addEventListener('DOMContentLoaded', function () {
    var glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 5,
        gap: 20, // Adjust gap between cards as needed
        breakpoints: {
            768: {
                perView: 2 // Adjust number of cards shown on smaller screens
            }
        }
    });

    glide.mount();
});
