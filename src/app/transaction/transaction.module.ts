import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { HomeTransactionComponent } from './home-transaction/home-transaction.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { FindTransactionComponent } from './find-transaction/find-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  declarations: [
   
  
    HomeTransactionComponent,
            ViewTransactionComponent,
            AddTransactionComponent,
            FindTransactionComponent,
            
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
  })
export class TransactionModule { }
