
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarMainComponent } from './nav-bar-main/nav-bar-main.component';
import { LocationStrategy,PathLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './authentication/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarMainComponent,
    NotFoundComponent,
    HomeComponentComponent,
    LoginComponent,
  ],
 
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    },
  
  
    )
    
  ],
  providers: [
    provideClientHydration(),
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    provideHttpClient(),
    provideHttpClient(withFetch()),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
