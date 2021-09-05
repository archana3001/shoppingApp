import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';
import { Product } from 'src/app/shared/user';
HC_map(Highcharts);

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  listProd: Product[];
  listP: any;
  constructor(public authService: AuthService) {
    this.authService.getAllProducts().subscribe((res) => {
      //console.log(res);
      this.listProd = res;
    /*  for(let i = 0; i < this.listProd.length; i++){
        var st:string=this.listProd[i].name;
        var q: number=this.listProd[i].quantity;
        this.listP.push([st,q]);
    }
    console.log(this.listP)
  */})
  }
  
  // tslint:disable-next-line:member-ordering
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Sell Data'
    },
    subtitle: {
      text: 'Sells'
    },
    tooltip: {
      split: true,
      valueSuffix: ' millions'
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [[]]
      }
    ]
  };

  ngOnInit(): void {
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize'));
    }, 300);
  }

}
