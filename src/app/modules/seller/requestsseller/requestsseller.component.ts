import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestsseller',
  templateUrl: './requestsseller.component.html',
  styleUrls: ['./requestsseller.component.scss']
})
export class RequestssellerComponent implements OnInit {
Rsellers = [{
  name: 'ABCD',
  product: 'SRTGG'
},
{
  name: 'ABCD2',
  product: 'SRTGG1'
}];
  constructor() { }

  ngOnInit(): void {
  }

}
