import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {MdInputModule} from '@angular/material';
import { MdDatepickerModule, MdNativeDateModule} from '@angular/material';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';
import { LoginComponent} from './login/login.component';
import { RunsComponent} from './runs/runs.component';
import { RateComponent} from './rate/rate.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'runs',
    component: RunsComponent
  },
  {
    path: 'rate',
    component: RateComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    RunsComponent,
    RateComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes),
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
