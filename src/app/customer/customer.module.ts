import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { FindCustomerComponent } from './find-customer/find-customer.component';
import { InfoAccountComponent } from './info-account/info-account.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    
  
    AddCustomerComponent,
             ViewCustomerComponent,
           
            
             HomeCustomerComponent,
             FindCustomerComponent,
             InfoAccountComponent,
             
  ],
  imports: [

    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  providers:[]
})
export class CustomerModule { }
