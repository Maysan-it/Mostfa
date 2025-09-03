// E-payments (retail) line chart
(function(){
  const el = document.getElementById('chartEpayments');
  if(!el) return;
  const chart = echarts.init(el);
  chart.setOption({
    backgroundColor: 'transparent',
    textStyle: { color: getComputedStyle(document.body).color },
    tooltip: { trigger: 'axis' },
    grid: { left: 40, right: 16, top: 26, bottom: 28 },
    xAxis: { type: 'category', data: ['2023','2024'], axisLine:{lineStyle:{color:'#556'}} },
    yAxis: { type: 'value', axisLabel:{ formatter: '{value}%' }, axisLine:{lineStyle:{color:'#556'}} },
    series: [{
      name: 'E-payments share',
      type: 'line',
      data: [70,79],
      smooth: true,
      lineStyle: { width: 3, color: '#22c55e' },
      itemStyle: { color: '#22c55e' },
      areaStyle: { color: 'rgba(34,197,94,0.12)' }
    }]
  });
})();

// KSA pricing ranges bar (min/max)
(function(){
  const el = document.getElementById('chartPricing');
  if(!el) return;
  const chart = echarts.init(el);
  const categories = ['Freelance','Small firm','Mid-tier','Top-tier'];
  const minSeries = [500, 1000, 3000, 10000];
  const maxSeries = [1500, 3000, 8000, 15000]; // using 15k as a visualization cap for 10k+ band

  chart.setOption({
    backgroundColor: 'transparent',
    legend: { textStyle:{ color: getComputedStyle(document.body).color } },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: 60, right: 16, top: 30, bottom: 28 },
    xAxis: { type: 'category', data: categories, axisLine:{lineStyle:{color:'#556'}} },
    yAxis: { type: 'value', name: 'SAR / month', axisLine:{lineStyle:{color:'#556'}} },
    series: [
      { name: 'Min', type: 'bar', data: minSeries, itemStyle:{ color: '#60a5fa' } },
      { name: 'Max', type: 'bar', data: maxSeries, itemStyle:{ color: '#f59e0b' } }
    ]
  });
})();
