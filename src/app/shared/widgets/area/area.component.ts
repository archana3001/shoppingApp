import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Product } from 'src/app/shared/user';
import { AuthService } from '../../auth.service';
import HC_map from 'highcharts/modules/map';
HC_map(Highcharts);


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent {
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: "Infosys stock value"
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "Infosys Stock value in dollar"
      }
    },
    series: [{
      data: [12, 8, 43, 35, 20, 90, 100, 110],
      type: 'line'
    }]
  }
  
}
