const donutEl = document.getElementById("donut");

const donut = new Chart(donutEl, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Green', 'Yellow'],
        datasets: [{
            data: [150, 150, 300],
            backgroundColor: ['#f1a80a','#90d751', '#248bcb'],
            hoverOffset: 4,
            borderWidth: 0,
            borderColor: 'transparent'
        }]
    },
    options: {
        cutout: 100,
        plugins: {
            legend: {
                display:false,
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.formattedValue;
                        return label;
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: true
    }
});
  fetch('./donut.json')
    .then(response => response.json())
    .then(newData => {
      donut.data.labels = newData.labels;
      donut.data.datasets[0].data = newData.values;
      donut.data.datasets[0].backgroundColor = newData.colors;

      donut.update();
    })
    .catch(error => {
      console.error('Failed to fetch data:', error);
    });


