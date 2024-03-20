import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeAccountComponent } from './home-account/home-account.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { GetInterestComponent } from './get-interest/get-interest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAccountComponent } from './add-account/add-account.component';






@NgModule({
  declarations: [

  
    HomeAccountComponent,
         ViewAccountsComponent,
         GetInterestComponent,
         AddAccountComponent,
         
        
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
