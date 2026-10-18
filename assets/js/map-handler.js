function initCedilleMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement || typeof L === 'undefined') return;

  if (mapElement._leaflet_id) return;

  // coords pavillon D
  const lat = parseFloat(mapElement.getAttribute('data-lat')) || 45.4935;
  const lng = parseFloat(mapElement.getAttribute('data-lng')) || -73.5626;
  const zoom = parseInt(mapElement.getAttribute('data-zoom'), 10) || 17;

  // Initialize Leaflet map
  const map = L.map('map', {
    center: [lat, lng],
    zoom: zoom,
    scrollWheelZoom: false,
    attributionControl: true
  });

  // OpenStreetMap standard tile layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
  }).addTo(map);

  // leaflet marker pin
  const marker = L.marker([lat, lng]).addTo(map);
  // links to other map platforms
  const osmUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`;
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const appleUrl = `https://maps.apple.com/?ll=${lat},${lng}&q=Club+CEDILLE`;

  marker.bindPopup(`
        <div style="font-family: inherit;">
            <strong style="font-size: 1.05em;">CEDILLE</strong><br>
            Pavillon D, Local D-2020<br>
            1219 rue William, Montréal, QC H3C 0S6
            <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid #dee2e6; font-size: 0.85em;">
                <span style="color: #6c757d; display: block; margin-bottom: 4px;">Ouvrir avec :</span>
                <a href="${osmUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; margin-right: 6px;">OpenStreetMap</a> &bull;
                <a href="${gmapsUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; margin-right: 6px; margin-left: 6px;">Google Maps</a> &bull;
                <a href="${appleUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; margin-left: 6px;">Apple Maps</a>
            </div>
        </div>
    `).openPopup();

  setTimeout(function () {
    map.invalidateSize();
  }, 200);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCedilleMap);
} else {
  initCedilleMap();
}
