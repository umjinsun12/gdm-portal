import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['SNUH Targeted', 'Leukemia Data', 'TCGA COAD Data', 'Depression Data'],
      datasets: [
        {
          label: 'Age',
          backgroundColor: ['#FF9AA2','#FFDAC1','#B5EAD7','#C7CEEA'],
          data: [59, 39, 16, 0]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}