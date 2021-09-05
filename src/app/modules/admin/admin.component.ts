import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentUser: any;
admins: any = [{
  name: 'Archana',
  type: '1'
},
{
  name: 'Priyanshu',
  type: '1'
}];
show_admin=false;
AdminShow="show Admin";
  constructor(public authService: AuthService,
    private actRoute: ActivatedRoute) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.authService.getUserProfile(id).subscribe(res => {
    this.currentUser = res.msg;
  })}

  ngOnInit(): void {
  }
  show_admins(){
    

    if(this.AdminShow==="show Admin"){
      this.AdminShow="Hide Admin";
      this.show_admin=!this.show_admin;
    }
    else if(this.AdminShow==="Hide Admin"){
      this.AdminShow="Show Admin";
      this.show_admin=!this.show_admin;
    }
  }

}
