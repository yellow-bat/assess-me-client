import {Component, OnInit} from '@angular/core';
import {UserService, IAuthenticatedResult} from '../../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean;
  public user: any;

  constructor(private userService: UserService) {
    this.userService.authenticatedResult.subscribe((authenticatedResult: IAuthenticatedResult) => {
      this.isAuthenticated = !authenticatedResult.err && authenticatedResult.result;
    });
  }

  logoutClick(): void {
    this.userService.logout();
  }

  ngOnInit() {

  }
}
