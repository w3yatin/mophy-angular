import { Component } from '@angular/core';

@Component({
  selector: 'app-radialbar-custom-angle-circle',
  templateUrl: './radialbar-custom-angle-circle.component.html',
  styleUrls: ['./radialbar-custom-angle-circle.component.css']
})
export class RadialbarCustomAngleCircleComponent {
  chartOptions = {
    series: [76, 67, 61, 90],
    chart: {
      height: 390,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            show: false
          }
        }
      }
    },
    colors:["var(--primary)", "#ff5c00", "#febb3b", "#ff6077"],
    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 50,
      offsetY: 10,
      labels: {
        useSeriesColors: true
      },
      formatter: function (seriesName: any, opts: any) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        horizontal: 3
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }
    ]
  };

}
