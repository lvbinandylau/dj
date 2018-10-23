import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {
  private UserName: string;

  constructor() { }

  public getName () {
    return this.UserName;
  }

  public setname (name: string) {
    this.UserName = name;
  }

}
