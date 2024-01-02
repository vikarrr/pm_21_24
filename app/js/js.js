
var ctx = document.getElementById('myChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 400);


gradient.addColorStop(0, 'rgba(78,198,127,0.8)'); // Початок зафарбовування від y = 2500
gradient.addColorStop(1, 'rgba(220,50,150,1)');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
    {
        label: 'Dataset 2',
        data: [
          { x: 'Jan', y: 6000 },
          { x: 'Feb', y: 5500 },
          { x: 'May', y: 16000 },
          { x: 'Jul', y: 11000 },
          { x: 'Sep', y: 19000 },
          { x: 'Nov', y: 13000 },
          { x: 'Dec', y: 15000 }], 
        backgroundColor: gradient,
        borderWidth: 1,
        pointRadius: [0],
        cubicInterpolationMode: 'monotone',
        fill: true
      },
      {
        
        label: 'Dataset 1',
        data: [
          { x: 'Jan', y: 8500 },
          { x: 'Feb', y: 7500 },
          { x: 'Mar', y: 17000 },
          { x: 'Jun', y: 6000 },
          { x: 'Sep', y: 20000 },
          { x: 'Oct', y: 14000 },
          { x: 'Dec', y: 19500 }
        ],
        backgroundColor:'#253340',
        borderColor: '#253340',
        pointRadius: [0],
        borderWidth: 1,
        cubicInterpolationMode: 'monotone',
        fill: true
      },
      
    ]
  },
  options: {
    plugins: {
      legend: {
          display:false,
        },
      },
    responsive: true,
    scales: {
      x: {
        type: 'category',
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 20000,
        ticks: {
          stepSize: 5000,
          beginAtZero: true,
          precision: 0
        }
      }
    }
  }
});

