import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptionsArgs} from '@angular/http';
import config from '../config/config';

@Injectable()
export class HttpClientService {
  constructor (private http: Http) {}

  createAuthorizationHeader(options: RequestOptionsArgs): RequestOptionsArgs {
    if (!options) options = {};
    if (!options.headers) options.headers = new Headers();
    options.headers.append(config.authHeaderName, `bearer ${localStorage.getItem(config.tokenKeyName)}`);
    return options;
  }

  get(path: string, options?: RequestOptionsArgs) {
    return this.http.get(`${config.serverUrl}/${path}`, this.createAuthorizationHeader(options));
  }

  post(path: string, body: any, options?: RequestOptionsArgs) {
    return this.http.post(`${config.serverUrl}/${path}`, body, this.createAuthorizationHeader(options));
  }

  put(path: string, body: any, options?: RequestOptionsArgs) {
    return this.http.put(`${config.serverUrl}/${path}`, body, this.createAuthorizationHeader(options));
  }

  delete(path: string, options?: RequestOptionsArgs) {
    return this.http.delete(`${config.serverUrl}/${path}`, this.createAuthorizationHeader(options));
  }
}
