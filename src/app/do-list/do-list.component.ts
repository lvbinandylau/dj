import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReturnValue} from '../login/login.component';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-do-list',
  templateUrl: './do-list.component.html',
  styleUrls: ['./do-list.component.css']
})
export class DoListComponent implements OnInit {
  private urlGetName = AppComponent.urlGetName;
  loginname = '';

  constructor(
    private httpClient: HttpClient,

  ) { }

  getname() {
    this.httpClient.get<ReturnValue>(this.urlGetName, {withCredentials: true})
      .subscribe(resp => {
        console.log(resp.msg);
        this.loginname = resp.msg;
      });
  }


  ngOnInit() {
    this.getname();
  }

}
