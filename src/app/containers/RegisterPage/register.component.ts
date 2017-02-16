import { Component, OnInit } from '@angular/core';

export interface IRegister {
  login: string;
  password: string;
  email: string;
  name: string;
  position: string;
  skills: string[];
}

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: IRegister = <IRegister>{};

  setTag(tags: string[]) {
    this.model.skills = tags;
  }

  constructor() { }

  ngOnInit() {
  }

}
