import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../common/services/user.service';

export interface ICreds {
  login: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: ICreds = {
    login: '',
    password: ''
  };

  onSubmit(): void {
    this.userService.login(this.model);
  };

  authHandler: (isAuthenticated: boolean) => void = (isAuthenticated: boolean) => {
    if (isAuthenticated) this.router.navigateByUrl('/');
  };

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {}
}
