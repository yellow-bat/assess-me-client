import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

export interface MenuItem {
  label: string;
  url: string;
  isPublic: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  defaultMenu: MenuItem[] = [{
    label: 'Sign In',
    url: '/login',
    isPublic: true
  },{
    label: 'Register',
    url: '/register',
    isPublic: true
  }, {
    label: 'Logout',
    url: '/logout',
    isPublic: false
  }];

  menu: MenuItem[];

  constructor(private userService: UserService) {
    this.userService.isAuthenticated.subscribe((isAuthenticated: boolean) => {
      this.menu = this.defaultMenu.filter( item =>
        item.isPublic === !isAuthenticated
      );
    });
  }

  ngOnInit() {

  }
}
