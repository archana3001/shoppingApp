import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
   sideBarOpen = false;
   currentUser: Object = {};
   private sub: Subscription;
   public title: string;
  constructor( public authService: AuthService,
    private actRoute: ActivatedRoute, private router: Router) { 
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    //  console.log("this is from default", this.currentUser);
    })
  }

  ngOnInit(): void {
   /* this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.actRoute.snapshot.firstChild.data;
        console.log('title-', title);

      }
    });*/
  }
  sideBarToggler( event ) {
    this.sideBarOpen = !this.sideBarOpen;
  }
  /*ngOnDestroy(){
    this.sub.unsubscribe();
  }
*/
}
