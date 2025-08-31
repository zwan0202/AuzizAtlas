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

  // Render all metrics present in the location
  const metricsHtml = Object.values(location.metrics).map(metric => `
    <div class="metric-card">
      <div class="metric-title">${metric.title || ''}</div>
      <div class="metric-value">${metric.value || ''}</div>
      <div class="metric-detail">${metric.detail || ''}</div>
    </div>
  `).join('');

  infoDiv.innerHTML = `
    <div class="location-header">
      <div class="location-name">${location.name}</div>
      <div class="suitability-score ${scoreClass}">${location.suitability}/100 - ${scoreText}</div>
    </div>
    ${metricsHtml}
    <div class="chart-container">
      <canvas id="radarChart"></canvas>
    </div>
    <div class="advantages-list">
      <h4>Key Advantages</h4>
      <ul>
        ${(location.advantages || []).map(a => `<li class="advantage-item"><span class="advantage-icon">✔️</span><span class="advantage-text">${a}</span></li>`).join('')}
      </ul>
    </div>
    <div class="recommendations">
      <h4>Strategic Recommendations</h4>
      <ul>
        ${(location.recommendations || []).map(r => `<li class="recommendation-item">${r}</li>`).join('')}
      </ul>
    </div>
    <div class="data-sources" style="margin-top:20px;">
      <h4>Integrated Data Sources</h4>
      <ul style="font-size:13px; color:#718096; list-style:none; padding-left:0;">
        <li><input type="checkbox" checked disabled> AEMO Grid & Energy Data</li>
        <li><input type="checkbox" checked disabled> Geoscience Australia Spatial Data</li>
        <li><input type="checkbox" checked disabled> Bureau of Meteorology Climate Data</li>
        <li><input type="checkbox" checked disabled> ACMA Telecommunications Infrastructure</li>
        <li><input type="checkbox" checked disabled> BITRE Regional Development Data</li>
        <li><input type="checkbox" checked disabled> Rewiring the Nation Investment Data</li>
      </ul>
    </div>
  `;

  document.querySelector('.initial-message').style.display = 'none';
  infoDiv.classList.add('active');

  setTimeout(() => {
    const ctx = document.getElementById('radarChart');
    renderRadarChart(ctx, location);
  }, 100);
}
