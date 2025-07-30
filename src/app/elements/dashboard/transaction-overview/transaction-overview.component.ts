import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.css']
})
export class TransactionOverviewComponent {

  
  constructor(private modalService: NgbModal) { }

	openCenter(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
  
  chartOptions = {
    series: [
      {
        name: 'Running',
        data: [50, 18, 70, 40, 90, 70, 20],
      },
      {
        name: 'Cycling',
        data: [80, 40, 55, 20, 45, 30, 80]
      },
    ],
    chart: {
      type: 'bar',
      height: 370,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '57%',
        borderRadius: 10,
      },
    },

    states: {
      hover: {
        filter: 'none',
      }
    },
    colors: ['#D2D2D2', '#EBEBEB'],
    dataLabels: {
      enabled: false,
    },
    markers: {
      shape: "circle",
    },

    legend: {
      show: false,
      fontSize: '12px',
      labels: {
        colors: '#000000',

      },
      markers: {
        width: 18,
        height: 18,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: undefined,
        radius: 12,
      }
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['transparent']
    },
    grid: {
      borderColor: '#eee',
    },
    xaxis: {

      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      labels: {
        style: {
          colors: '#787878',
          fontSize: '13px',
          fontFamily: 'poppins',
          fontWeight: 100,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
      crosshairs: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        offsetX: -16,
        style: {
          colors: '#787878',
          fontSize: '13px',
          fontFamily: 'poppins',
          fontWeight: 100,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
    },
    fill: {
      opacity: 1,
      colors: ['#D2D2D2', '#EBEBEB'],
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + " thousands"
        }
      }
    },
  }

}
