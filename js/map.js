// map.js
// Handles Leaflet map setup and marker interactions

import { locations } from './locations.js';
import { showLocationDetails } from './ui.js';

export function initMap() {
  if (typeof L === 'undefined') {
    document.getElementById('loading').innerHTML = `
      <h3>Error Loading Map</h3>
      <p>Unable to load mapping library. Please refresh the page.</p>
    `;
    return;
  }

  // Hide loading, show legend
  document.getElementById('loading').style.display = 'none';
  document.getElementById('legend').style.display = 'block';

  const map = L.map('map').setView([-28.0, 134.0], 5);

  // Tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map);

  // Add location markers
  locations.forEach(location => {
    const markerColor =
      location.category === 'excellent' ? '#10b981' :
      location.category === 'good' ? '#3b82f6' :
      location.category === 'moderate' ? '#f59e0b' : '#ef4444';

    const marker = L.circleMarker(location.coords, {
      radius: 12,
      fillColor: markerColor,
      color: '#fff',
      weight: 3,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(map);

    marker.bindPopup(`<strong>${location.name}</strong><br>Suitability: ${location.suitability}/100`);
    marker.on('click', () => showLocationDetails(location));
  });

  return map;
}
