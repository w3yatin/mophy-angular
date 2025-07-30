import { Component } from '@angular/core';

@Component({
  selector: 'app-radialbar-semi-circle-gauge',
  templateUrl: './radialbar-semi-circle-gauge.component.html',
  styleUrls: ['./radialbar-semi-circle-gauge.component.css']
})
export class RadialbarSemiCircleGaugeComponent {
  chartOptions = {
    series: [76],
    chart: {
      type: "radialBar",
      offsetY: -20
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            opacity: 0.31,
            blur: 2
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: "22px"
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      }
    },
     colors:["var(--primary)"],
    labels: ["Average Results"]
  };
}
