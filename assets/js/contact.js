/*
 *  Document   : contact.js
 *  Author     : pixelcave
 *  Description: Custom javascript code used in Contact page
 */

var Contact = function() {

    return {
        init: function() {
            /*
             * With Gmaps.js, Check out examples and documentation at http://hpneo.github.io/gmaps/examples.html
             */

            // Initialize map
            var contactMap = new GMaps({
                div: '#gmap',
                lat: 4.154662,
                lng: -73.639226,
                zoom: 16,
                disableDefaultUI: true,
                scrollwheel: false
            });

            contactMap.addMarkers([
                {
                    lat: 4.154662,
                    lng: -73.639226,
                    infoWindow: {content: '<strong>Alba Boutique</strong> - Cra 37 # 23 - 68 San Benito'},
                    animation: google.maps.Animation.DROP
                }
            ]);
        }
    };
}();