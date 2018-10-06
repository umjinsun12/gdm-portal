import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['SNUH Targeted', 'Leukemia Data', 'TCGA COAD Data', 'Depression Data'],
      datasets: [
        {
          label: 'Asian',
          backgroundColor: '#FF9AA2',
          data: [10, 11, 503, 1000]
        },
        {
            label: 'Black',
            backgroundColor: '#FFDAC1',
            data: [0, 59, 6, 0]
          },
          {
            label: 'Unkown/Unreported',
            backgroundColor: '#B5EAD7',
            data: [0, 175, 0, 0]
          },
          {
            label: 'White',
            backgroundColor: '#C7CEEA',
            data: [0, 214, 9, 0]
          }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}