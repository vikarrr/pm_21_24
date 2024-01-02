var ctx = document.getElementById('myCharti').getContext('2d');
var myCharti = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S','M'],
    datasets: [{
        // label: '',
        data: [15, 30, 30, 80, 60, 70, 60,100],
        backgroundColor: "rgba(120,212,158)",
        borderColor: "rgba(120,212,158)", // Колір контуру графіка
        pointBackgroundColor: 'white',
        pointBorderColor:"rgba(59,151,97)",
        pointRadius: [0, 4, 4, 4, 4, 4, 4,0],
        fill: true // Заповнення області під графіком
    }]
  },
  options: {
    plugins: {
      legend: {
          display:false,
        },
    },
    
      
    scales: {
      x: {
        display: false // Приховати ось X
          },
        
      y: {
          display: false, // Приховати ось Y
          suggestedMin: 0,
         suggestedMax: 100,
        ticks: {
          stepSize: 20,
          beginAtZero: true,
          precision: 0
          }
        
          
          },
      
      
    }
  }
});
