import { NgModule } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DoListComponent} from './do-list/do-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'details', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dolist', component: DoListComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
