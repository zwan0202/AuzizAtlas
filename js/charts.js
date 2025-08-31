// charts.js
// Handles all Chart.js rendering

let currentChart = null;

export function renderRadarChart(ctx, location) {
  if (!ctx || typeof Chart === 'undefined') return;

  const chartCtx = ctx.getContext('2d');
  if (currentChart) currentChart.destroy();

  currentChart = new Chart(chartCtx, {
    type: 'radar',
    data: {
      labels: location.chartData.labels,
      datasets: [{
        label: 'Suitability Factors',
        data: location.chartData.values,
        backgroundColor: 'rgba(102, 126, 234, 0.2)',
        borderColor: 'rgba(102, 126, 234, 1)',
        pointBackgroundColor: 'rgba(102, 126, 234, 1)',
        pointBorderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { r: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } } },
      plugins: { legend: { display: false } }
    }
  });
}
