// ui.js
// Handles sidebar updates, legend toggles, etc.

import { renderRadarChart } from './charts.js';

export function showLocationDetails(location) {
  const infoDiv = document.getElementById('location-info');

  const scoreClass =
    location.suitability >= 85 ? 'score-excellent' :
    location.suitability >= 70 ? 'score-good' :
    location.suitability >= 50 ? 'score-moderate' : 'score-limited';

  const scoreText =
    location.suitability >= 85 ? 'EXCELLENT' :
    location.suitability >= 70 ? 'GOOD' :
    location.suitability >= 50 ? 'MODERATE' : 'LIMITED';

  infoDiv.innerHTML = `
    <h2>${location.name}</h2>
    <div class="score-badge ${scoreClass}">${location.suitability}/100 - ${scoreText}</div>
    <div class="metrics-grid">
      <div class="metric-card"><div class="metric-label">⚡ Power</div><div class="metric-value">${location.metrics.power}</div></div>
      <div class="metric-card"><div class="metric-label">🌐 Connectivity</div><div class="metric-value">${location.metrics.connectivity}</div></div>
      <div class="metric-card"><div class="metric-label">🌡️ Climate</div><div class="metric-value">${location.metrics.climate}</div></div>
      <div class="metric-card"><div class="metric-label">⚠️ Risk</div><div class="metric-value">${location.metrics.risk}</div></div>
      <div class="metric-card"><div class="metric-label">🏗️ Infrastructure</div><div class="metric-value">${location.metrics.infrastructure}</div></div>
      <div class="metric-card"><div class="metric-label">💰 Cost</div><div class="metric-value">${location.metrics.cost}</div></div>
    </div>
    <div class="chart-container">
      <canvas id="radarChart"></canvas>
    </div>
  `;

  document.querySelector('.initial-message').style.display = 'none';
  infoDiv.classList.add('active');

  setTimeout(() => {
    const ctx = document.getElementById('radarChart');
    renderRadarChart(ctx, location);
  }, 100);
}
