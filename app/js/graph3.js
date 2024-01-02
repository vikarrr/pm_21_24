var ctx = document.getElementById('myChart2').getContext('2d');

// Ваші дані для графік

var myChart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M','','T','', 'W','', 'Th','', 'F','', 'S','', 'Sd','','M1'],
    datasets: [
      {
        label: 'New Visitors',
        data: [
          { x: 'M', y: 11 },
          { x: 'W', y: 20 },
          { x: 'F', y: 15 },
          { x: 'Sd', y: 27 },
          { x: 'M1', y: 25 },
          
          // Додайте інші пари значень за аналогією
        ],
        pointBackgroundColor: '#00cccc',
        pointBorderColor: 'white',
            
        pointBorderWidth:3,
        //pointBorderColor:"#00cccc",
        pointRadius: 7,
        borderColor: '#00cccc',
        borderWidth: 5,
      },
      {
        label: 'Old Visitors',
        data: [
        { x: 'M', y: 15 },
        { x: 'T', y: 26 },
        { x: 'Th', y: 21 },
        { x: 'F', y: 25 },
        { x: 'Sd', y: 18 }, 
        { x: 'M1', y: 20 },
          // Додайте інші пари значень за аналогією
        ],
        pointBackgroundColor: '#f1a80a',
        pointBorderColor: 'white',
        pointBorderWidth:3,
        pointRadius: 7,
        borderColor: '#f1a80a',
        borderWidth: 5,
        
      }
    ]
  },
  options: {
      responsive: true,
      
    
    scales: {
      x: {
          
          display: false,
        type: 'category',
        grid: {
          display: false
        },
      },
        y: {
          display: false,
        min: 0,
        max: 35, 
        
      }
    },
    plugins: {
      legend:{
        display: false,       
        position: 'top',
        align: 'start',
        // labels: {
        //   usePointStyle: true,
        //   color: '#a3aec8', 
        //   padding: 20
        // },
      },

      tooltip: {
        enabled: true
      }
    }
  }
});
document.getElementById('myChart2').style.filter = ' drop-shadow(0 0 1px rgba(0,0,0,0.25))';
function updateChartData() {
  fetch('./donut.json')
    .then(response => response.json())
    .then(newDat => {
      // Update the labels and datasets' data
      myChart2.data.labels = newDat.label;
      myChart2.data.datasets[0].data = newDat.data1;
      myChart2.data.datasets[1].data = newDat.data2; // Assuming the second dataset refers to 'info2'

      // Update the chart
      myChart2.update();
    })
    .catch(error => {
      console.error('Failed to fetch data:', error);
    });
}

// Call the function for the first time
updateChartData();

