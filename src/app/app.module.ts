import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DoListComponent } from './do-list/do-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserNameService} from './user-name.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    LoginComponent,
    DoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [UserNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
