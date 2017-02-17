import {Injectable} from '@angular/core';
import {ICreds} from '../../containers/LoginPage/login.component';
import {Subject, BehaviorSubject} from 'rxjs';
import {HttpClientService} from './httpClient.service';
import config from '../config/config';


export interface IAuthenticatedResult {
  err?: string;
  result?: boolean;
}

@Injectable()
export class UserService {
  authenticatedResult: Subject<IAuthenticatedResult> = new BehaviorSubject<IAuthenticatedResult>({
    err: '',
    result: false
  });
  userDetails: Subject<any> = new BehaviorSubject<any>(false);

  logout(): void {
    this.authenticatedResult.next({result: false});
    localStorage.removeItem(config.tokenKeyName)
  }

  ping(): void {
    this.http.get('sessions').toPromise().then(
      res => this.authenticatedResult.next({result: true}),
      err => this.authenticatedResult.next({result: false})
    )
  }

  login(creds: ICreds): void {
    this.http.post('sessions', creds).toPromise().then(res => {
      let result = res.json();
      if (result.token) localStorage.setItem(config.tokenKeyName, result.token);
      this.authenticatedResult.next({result: true});
    }, res => {
      let error = res.json();
      this.authenticatedResult.next({err: error.errors.toString()});
    });
  };

  constructor(private http: HttpClientService) {
  }

}
