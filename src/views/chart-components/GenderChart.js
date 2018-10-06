import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: ['SNUH Targeted', 'Leukemia Data', 'TCGA COAD Data', 'Depression Data'],
      datasets: [
        {
          label: 'Female',
          backgroundColor: '#FF9AA2',
          data: [4, 216, 208, 702]
        },
        {
            label: 'Male',
            backgroundColor: '#FFDAC1',
            data: [6, 243, 309, 298]
          },
          {
            label: 'Unkown/Unreported',
            backgroundColor: '#B5EAD7',
            data: [0, 0, 1, 0]
          }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}