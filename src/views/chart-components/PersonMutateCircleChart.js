import {Pie} from 'vue-chartjs'

export default {
  extends: Pie,
  mounted () {
    this.renderChart({
      labels: ['SNUH Targeted Panel', 'Leukemia Data', 'TCGA COAD Data', 'Depression Data'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: ['#FF9AA2','#FFDAC1','#B5EAD7','#C7CEEA'],
          data: [10, 503, 459, 1000]
        }
      ]
    }, {responsive: true, 
        maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Case Distribution per Project'
        }
        })
  }
}