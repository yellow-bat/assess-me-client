import {Injectable} from '@angular/core';
import {ICreds} from '../../containers/LoginPage/login.component';
import {Subject, BehaviorSubject} from 'rxjs';
import {Http, Response, Headers} from '@angular/http';
import config from '../config/config';

const TOKEN_KEY_NAME = 'as-token';

export interface IAuthenticatedResult {
  err?: string;
  result?: boolean;
}

@Injectable()
export class UserService {
  authenticatedResult: Subject<IAuthenticatedResult> = new BehaviorSubject<IAuthenticatedResult>({err: '', result: false});
  userDetails: Subject<any> = new BehaviorSubject<any>(false);

  getUserDetails(): void {
    const headers = new Headers();
    //headers.append('Authorization', `bearer ${localStorage.getItem(TOKEN_KEY_NAME)}`);
    this.http.get(`${config.server_url}/v1/posts`, {
      headers: headers
    }).toPromise().then(item => {
      this.userDetails.next(item.json());
    }, (err: any) => {
      this.authenticatedResult.next({err: err.toString()});
    });
  }

  logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.authenticatedResult.next({result: false});
      localStorage.removeItem(TOKEN_KEY_NAME)
    });
  }

  ping(): void {
    const headers = new Headers();
    headers.append('Authorization', `bearer ${localStorage.getItem(TOKEN_KEY_NAME)}`);
      this.http.get(`${config.server_url}/ping`, {
    }).toPromise().then(
      res => this.authenticatedResult.next({result: true}),
      err => this.authenticatedResult.next({result: false})
    );
  }

  login(creds: ICreds): void {
    this.http.post(`${config.server_url}/login`, creds).toPromise().then(res => {
      let result = res.json();
      if (result.token) localStorage.setItem(TOKEN_KEY_NAME, 'key');
      this.authenticatedResult.next({result: true});
    }, err => {
      this.authenticatedResult.next({err: err.toString()});
    });
  };

  constructor(private http: Http) {}

}
