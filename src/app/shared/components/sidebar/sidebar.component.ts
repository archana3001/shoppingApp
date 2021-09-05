import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 currentUser: any;
 user: string;
 type: string;
 email: string;
  constructor(public authService: AuthService,private actRoute: ActivatedRoute) {
    let id = this.actRoute.snapshot.paramMap.get('id');
   // console.log(id);
    this.authService.getUserProfile(id).subscribe(res => {
    this.currentUser = res.msg;
    this.user=this.currentUser.name;
    this.email=this.currentUser.email;
    this.type=this.currentUser.admintype;
    console.log(this.currentUser);
  })}

  ngOnInit(): void {
  }

}
