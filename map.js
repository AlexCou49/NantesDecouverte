mapboxgl.accessToken = "pk.eyJ1IjoiZmxvcmlucmluamEiLCJhIjoiY2pzdnUwNzQ2MDN3NjN5b2YybTVldm1rYiJ9.4LbosUS9B6wlvh29oE2bVg";
var map = new mapboxgl.Map({
    container: "map",
    zoom: 16,
    center: [-1.555821, 47.207215],
    style: "mapbox://styles/mapbox/streets-v9"
});

new mapboxgl.Marker()
    .setLngLat([-1.555821, 47.207215])
    .addTo(map);



map.on('load', function () {


    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Nantes Decouverte</strong><p>2 Quai Francois Mitterand, Nantes</p>",
                        "icon": "art-gallery"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-1.555821, 47.207215]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', function (e) {

        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;


        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }


        popup.setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});
