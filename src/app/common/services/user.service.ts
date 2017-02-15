import {Injectable} from '@angular/core';
import {ICreds} from '../../containers/LoginPage/login.component';
import {Subject, BehaviorSubject} from 'rxjs';

const users: ICreds[] = [
  {
    login: 'admin',
    password: 'admin'
  }
];

const TOKEN_KEY_NAME = 'as-token';

@Injectable()
export class UserService {
  isAuthenticated: Subject<boolean> = new BehaviorSubject<boolean>(false);

  logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.isAuthenticated.next(false);
      localStorage.removeItem(TOKEN_KEY_NAME)
    });
  }

  login(creds: ICreds): void {
    const isLogged = users.some((item: ICreds) => {
      return item.login === creds.login && item.password === creds.password;
    });


    if (isLogged) localStorage.setItem(TOKEN_KEY_NAME, 'key');

    this.isAuthenticated.next(isLogged);
  };

  constructor() {}

}
