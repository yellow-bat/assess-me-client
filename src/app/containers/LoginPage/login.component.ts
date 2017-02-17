import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserService, IAuthenticatedResult} from '../../common/services/user.service';

export interface ICreds {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: ICreds = {
    username: '',
    password: ''
  };

  error: string;

  onSubmit(): void {
    this.userService.login(this.model);
  };

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.authenticatedResult.subscribe((data: IAuthenticatedResult) => {
      if (data.err) {
        this.error = data.err;
      }
      if (data.result) {
        this.router.navigateByUrl('/');
      }
    });
  }
}
