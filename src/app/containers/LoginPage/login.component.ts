import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/services/user.service';

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

  constructor(private userService: UserService) {}

  ngOnInit() {
  }
}
