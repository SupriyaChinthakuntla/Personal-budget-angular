import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets : [
      {
       data: [],
       backgroundColor: [
       'rgba(255, 99, 132, 0.5)',
       'rgba(54, 162, 0, 0.8)',
       'rgba(0, 255, 230, 0.2)',
       'rgba(22, 256, 192, 0.7)',
       'rgba(153, 102, 255, 0.5)',
       'rgba(0, 159, 64, 0.2)',
       'rgba(33, 159, 64, 0.3)',
       'rgba(55, 99, 255, 0.2)',
       'rgba(244, 244, 0, 0.7)',
       ],
      },
  ],
  labels: [],
  options: { events: [] }
  };

  constructor(private http: HttpClient, public dataService: DataService) { }

  ngAfterViewInit(): void {
    this.dataService.getData()
    .subscribe((res: any) => {
      for (let i = 0; i < res.myBudget.length; i++) {
       this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
       this.dataSource.labels[i] = res.myBudget[i].title;
       this.createChart();
      }
    });
}

  // tslint:disable-next-line: typedef
  createChart() {

    let ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');

    const myPieChart = new Chart(ctx, {
      type: 'pie',
        data: this.dataSource
    });
}

}
