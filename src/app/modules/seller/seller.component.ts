import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  sellers: any = [{
    name: 'Abc',
    product: 'Xy',
    description: 'ANMM COLONY PATNA'
  },
{

  name: 'Amc',
    product: 'Xiz',
    description: 'ApM COLONY PATNA'
}];
sellerslist = false;
contentSeller: String = 'show Sellers';

  constructor() { }

  ngOnInit(): void {
  }
  show_sellers(): void{
    if (this.sellerslist === true){
      this.sellerslist = false;
      this.contentSeller = 'show Sellers';
    }
    else if (this.sellerslist === false){
      this.sellerslist = true;
      this.contentSeller = 'hide Sellers';
    }
  }
}
