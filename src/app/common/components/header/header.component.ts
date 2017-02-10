import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.isAuthenticated.subscribe((isAuthenticated: boolean) => {
      console.log('subscribe: ', isAuthenticated);
    });
  }

  ngOnInit() {

  }
}
