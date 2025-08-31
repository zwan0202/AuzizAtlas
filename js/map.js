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

  // After adding location markers, add overlays:

  // Renewable Energy Zones
  const renewableZones = [
    {coords: [-33.5, 149.5], intensity: 0.9, name: "Central-West Orana REZ"},
    {coords: [-30.5, 151.5], intensity: 0.85, name: "New England REZ"},
    {coords: [-32.5, 151.2], intensity: 0.8, name: "Hunter-Central Coast REZ"},
    {coords: [-31.5, 116.5], intensity: 0.95, name: "WA Solar Hub"},
    {coords: [-38.0, 145.5], intensity: 0.85, name: "Victoria Wind Corridor"}
  ];

  renewableZones.forEach(zone => {
    L.circle(zone.coords, {
      radius: 80000,
      fillColor: '#10b981',
      fillOpacity: zone.intensity * 0.15,
      color: '#10b981',
      weight: 1,
      opacity: 0.3
    }).addTo(map).bindPopup(`<strong>${zone.name}</strong><br>Renewable Intensity: ${Math.round(zone.intensity * 100)}%`);
  });

  // Submarine Cable Landings
  const cableLandings = [
    {coords: [-33.85, 151.2], name: "Sydney - Southern Cross Cable"},
    {coords: [-31.95, 115.85], name: "Perth - Multiple Cables to Asia"},
    {coords: [-27.1, 153.4], name: "Sunshine Coast Cable"},
    {coords: [-12.46, 130.84], name: "Darwin - Multiple Planned Cables"}
  ];

  cableLandings.forEach(cable => {
    L.marker(cable.coords, {
      icon: L.divIcon({
        className: 'cable-marker',
        html: '🔌',
        iconSize: [20, 20]
      })
    }).addTo(map).bindPopup(`<strong>${cable.name}</strong>`);
  });

  return map;
}
