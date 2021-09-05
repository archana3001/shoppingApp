import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  toggleSideBar(){
   this.toggleSideBarForMe.emit();
  }
  logout() {
    this.authService.doLogout()
  }
}
