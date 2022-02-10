import { useEffect } from 'react';
import styles from './Map.module.css';
import mapboxGl from 'mapbox-gl';
import { COMRENMEMBERS } from '../../lib/constants';

mapboxGl.accessToken =
    'pk.eyJ1IjoidmlqYXlyYWh1bCIsImEiOiJja3gwc3F1ZjQxN3g1MndramM5czF4bWhpIn0.cMgNRG1nIu2uI24PVYb1Wg';

const Map = () => {
    useEffect(() => {
        // adding the map
        const map = new mapboxGl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-100.53890969965835, 56.01588857552511],
            zoom: 3,
            attributionControl: false,
            scrollZoom: false,
            doubleClickZoom: false,
        });

        // adding markers
        for (var key in COMRENMEMBERS) {
            addMarkers(map, COMRENMEMBERS[key]);
        }

        // popUP
        const popUp = new mapboxGl.Popup({
            closeButton: false,
            closeOnClick: false,
        });

        // adding the tooltip
        const markerElement = document.getElementsByClassName('comren_marker');
        let i = 0;
        for (var key in COMRENMEMBERS) {
            markerElement[i].addEventListener('mouseenter', () => {
                map.getCanvas().style.cursor = 'pointer';
                popUp
                    .setLngLat(COMRENMEMBERS[key].coord)
                    .setHTML(COMRENMEMBERS[key].description)
                    .addTo(map);
            });
            markerElement[i].addEventListener('mouseleave', () => {
                map.getCanvas().style.cursor = '';
                popUp.remove();
            });
            i = i + 1;
        }

        // to make the map padded between the last two members
        map.fitBounds([COMRENMEMBERS.BCIT.coord, COMRENMEMBERS.MemorialUniversity.coord], {
            padding: 75,
        });
    }, []);

    // function for adding markers
    const addMarkers = (map, coordinates) => {
        const markerDiv = document.createElement('div');
        markerDiv.className = 'comren_marker';
        markerDiv.id = styles.comren_member_marker;
        markerDiv.style.backgroundImage = `url(${coordinates.imgURL})`;
        new mapboxGl.Marker(markerDiv, { color: '#0f0300' })
            .setLngLat(coordinates.coord)
            .addTo(map);
    };

    return <div className={styles.map_container} id="map"></div>;
};

export default Map;
