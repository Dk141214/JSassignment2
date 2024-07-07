document.addEventListener('DOMContentLoaded', function () {
    const featuredImage = document.getElementById('featured');
    const caption = document.querySelector('figcaption');
    const thumbnails = document.querySelectorAll('#gallery ul li img');

    // Array of image details
    const imageDetails = [
        {
            src: 'flowers-yellow-large.jpg',
            alt: 'Yellow Flowers',
            caption: 'Golden yellow flowers shining under the sun'
        },
        {
            src: 'flowers-pink-large.jpg',
            alt: 'Pink Flowers',
            caption: 'Stunning pink flowers in the garden'
        },
        {
            src: 'flowers-purple-large.jpg',
            alt: 'Purple Flowers',
            caption: 'Vibrant purple flowers in the field'
        },
        {
            src: 'flowers-red-large.jpg',
            alt: 'Red Flowers',
            caption: 'Bright red flowers in full bloom'
        },
        {
            src: 'flowers-white-large.jpg',
            alt: 'White Flowers',
            caption: 'Elegant white flowers in the meadow'
        }
    ];

    // Add click event listeners to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function () {
            // Update featured image and caption
            featuredImage.src = imageDetails[index].src;
            featuredImage.alt = imageDetails[index].alt;
            caption.textContent = imageDetails[index].caption;

            // Highlight the active thumbnail
            thumbnails.forEach(img => img.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });
});
