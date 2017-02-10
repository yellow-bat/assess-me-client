import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  login(user: string, password: string): void {
    alert('hello');
  };

  constructor() { }

}
