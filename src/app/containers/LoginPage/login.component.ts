import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/services/user.service';

export interface ICreds {
  login: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  model: ICreds = {
    login: '1',
    password: '2'
  };

  onSubmit(): void {
    this.userService.login('111', '222');
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
  }
}
