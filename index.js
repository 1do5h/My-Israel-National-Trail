document.addEventListener('DOMContentLoaded', function() {    
    show_map();
});

function show_map() {        
    const osm = new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 7,
    });
    const osmTopo = new L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Kartendaten: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende, SRTM | Kartendarstellung: &copy; <a href="https://opentopomap.org/about#verwendung">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) contributors',
        minZoom: 7,
        maxZoom: 17,
    });
    const ilHike = new L.tileLayer('https://israelhiking.osm.org.il/English/Tiles/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://github.com/IsraelHikingMap/Map/blob/master/LICENSE.md">IsraelHikingMap</a> contributors',
        minZoom: 7,
        maxZoom: 16,
    });
    const map = L.map('map', {
        center: [ 31.5, 35.2 ],
        zoom: 7,
        layers: [osm]
    });
    const baseMaps = {
        "OpenStreetMap": osm,
        "OpenTopoMap": osmTopo,
        "IsraelHikingMap (Topo)": ilHike,
    };
    L.control.layers(baseMaps).addTo(map);
}
