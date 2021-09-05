import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestsadmin',
  templateUrl: './requestsadmin.component.html',
  styleUrls: ['./requestsadmin.component.scss']
})
export class RequestsadminComponent implements OnInit {
Radmins=[{
  name: 'AMI',
  type: '2'
},{
  name: 'AMIT',
  type: '4'
}]
  constructor() { }

  ngOnInit(): void {
  }

}
