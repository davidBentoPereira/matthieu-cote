/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import '../sass/main.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
const $ = require('jquery');

require('@ecodev/natural-gallery-js/natural-gallery');

// console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

window.addEventListener('load', function() {

    // Get reference of gallery container
    var elementRef = document.getElementById('gallery');

    // Init gallery according to wanted format
    var gallery = new NaturalGallery.Natural(elementRef);

    // Init the gallery
    gallery.init();

    // Convert your format into natural-gallery's format.
    var items = [
        {
            thumbnailSrc: '../img/matthieu_cote_img_1.jpg', // link to thumbnail image
            enlargedSrc: '../img/matthieu_cote_img_1.jpg', // link to enlarged image
            enlargedWidth: 1200,
            enlargedHeight: 800,
            title: 'Matthieu Côte', // Title for the label or button
            // link: string, // Link, transforms label into button
            // linkTarget: string // _blank | _top | _self | _parent
            color: 'red' // HEX color for background before image display
        }
    ];

// Set the entire collection
    gallery.setItems(items);
});
