import {Bar} from 'vue-chartjs'


const horizonalLinePlugin = {
    id: 'horizontalLine',
    beforeDraw: function(chartInstance){
    
    },
    afterDraw: function(chartInstance) {
  
      var yValue;
      var yScale = chartInstance.scales["y-axis-0"];
      var canvas = chartInstance.chart;
      var ctx = canvas.ctx;
      var index;
      var line;
      var style;


      var arrSort = [];

      for(var i= 0 ; i < chartInstance.data.datasets[0].data.length ; i++){
          var sum = 0;
          for(var j = 0 ; j < chartInstance.data.datasets.length ; j++){
              sum += chartInstance.data.datasets[j].data[i]
          }
          arrSort.push(sum);
      }
      for(var i =0;i<arrSort.length;i++){
        for(var j= i+1;j<arrSort.length;j++){
            if(arrSort[i]<arrSort[j]){
                var tmp = arrSort[i];
                arrSort[i] = arrSort[j]
                arrSort[j] = tmp;
                for(var k=0; k < chartInstance.data.datasets.length ; k++){
                    var tmp = chartInstance.data.datasets[k].data[i];
                    chartInstance.data.datasets[k].data[i] = chartInstance.data.datasets[k].data[j];
                    chartInstance.data.datasets[k].data[j] = tmp;
                }
            }
        }
    }

    chartInstance.update();

  
      if (chartInstance.options.horizontalLine) {
  
        for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
          line = chartInstance.options.horizontalLine[index];
  
          if (!line.style) {
            style = "#080808";
          } else {
            style = line.style;
          }
  
          if (line.y) {
            yValue = yScale.getPixelForValue(line.y);
          } else {
            yValue = 0;
          }
          ctx.lineWidth = 3;
  
          if (yValue) {
            window.chart = chartInstance;
            ctx.beginPath();
            ctx.moveTo(0, yValue);
            ctx.lineTo(canvas.width, yValue);
            ctx.strokeStyle = style;
            ctx.stroke();
          }
  
          if (line.text) {
            ctx.fillStyle = style;
            ctx.fillText(line.text, 0, yValue + ctx.lineWidth);
          }
        }
        return;
      }
    }
  }

  export default {
    extends: Bar,
    beforeMount () {
        this.addPlugin(horizonalLinePlugin)
      },
      mounted () {
        this.renderChart({
          labels: ['TP53', 'PIK3CA', 'KMT2D', 'FAT4', 'ARID1A', 'PTEN', 'KMT2C','APC','KRAS', 'BRAF', 'FAT1', 'ATRX', 'NF1', '2FHX3', 'IDH1','ATM','TRRAP','RNF213','AKAP9', 'GRIN2A'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 39, 10, 40, 39, 80, 40, 33, 12, 33, 12, 33, 44, 33, 38, 11, 22, 33, 11, 8]
            },
            {
              label: 'Data Two',
              backgroundColor: '#3D5B96',
              data: [40, 39, 10, 40, 39, 80, 40, 23, 22, 33, 12, 34, 5, 11, 23, 10, 22, 34, 56, 32]
            },
             {
              label: 'Data Three',
              backgroundColor: '#1EFFFF',
              data: [20, 10, 12, 33, 22, 4, 0, 2, 3, 9, 12, 12, 33, 44, 56, 12, 13,22, 33, 44, 55]
            },
            {
                label: 'Data Two',
                backgroundColor: '#2D4B96',
                data: [40, 39, 10, 40, 39, 80, 40, 23, 22, 33, 12, 34, 5, 11, 23, 10, 22, 34, 56, 32]
              },
              {
                label: 'Data Three',
                backgroundColor: '#FEF00FF',
                data: [20, 10, 12, 33, 22, 4, 0, 2, 3, 9, 12, 12, 33, 44, 56, 12, 13,22, 33, 44, 55]
              },
              {
                label: 'Data One',
                backgroundColor: '#687979',
                data: [40, 39, 10, 40, 39, 80, 40, 33, 12, 33, 12, 33, 44, 33, 38, 11, 22, 33, 11, 8]
              },
          ]
        }, {
          responsive: true, 
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Top Mutated Cancer Genes in Selected Person'
            },
          scales: {
            xAxes: [{
              stacked: true,
              categoryPercentage: 0.5,
              barPercentage: 1.7
            }],
            yAxes: [{
              stacked: true
            }]
          }
        })
      }
      
  }