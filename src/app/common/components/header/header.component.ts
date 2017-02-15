import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated;

  constructor(private userService: UserService) {
    this.userService.isAuthenticated.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  logoutClick(): void {
    this.userService.logout();
  }

  ngOnInit() {

  }
}
